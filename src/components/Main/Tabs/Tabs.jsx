import { useEffect, useState } from 'react';
import style from './Tabs.module.css';
import PropTypes from 'prop-types';

import { assignId } from '../../../utils/generateRandomId';
import { debounceRaf } from '../../../utils/debounce';
import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import { useNavigate } from 'react-router-dom';

const LIST = [
  { value: 'Главная', Icon: './img/home.svg', link: 'rising' },
  { value: 'Топ', Icon: './img/top.svg', link: 'top' },
  { value: 'Лучшие', Icon: './img/best.svg', link: 'best' },
  { value: 'Горячие', Icon: './img/hot.svg', link: 'hot' },
].map(assignId);

export const Tabs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState('Выберите раздел');
  const navigate = useNavigate();

  const handleResize = () => {
    document.documentElement.clientWidth < 768 ? setIsDropdown(true) :
      setIsDropdown(false);
  };

  const handleSelectSection = (value) => {
    setSelectedMenuItem(value);
  };

  useEffect(() => {
    const debounceResize = debounceRaf(handleResize);
    window.addEventListener('resize', debounceResize);

    return () => {
      window.removeEventListener('resize', debounceResize);
    };
  }, []);

  return (
    <div className={style.container}>
      {isDropdown && (
        <div className={style.wrapperBtn}>
          <button
            className={style.btn}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {selectedMenuItem}
            <SvgIcon src='./img/arrow.svg' />
          </button>
        </div>
      )}

      {(isDropdownOpen || !isDropdown) && (
        <ul className={style.list} onClick={() => setIsDropdownOpen(false)}>
          {
            LIST.map(({ value, id, Icon, link }) => (
              <Text
                As='li'
                className={style.item}
                key={id}
              >
                <Text
                  As='button'
                  className={style.btn}
                  onClick={() => {
                    handleSelectSection(value);
                    navigate(`/category/${link}`);
                  }}
                >
                  {value}
                  {Icon && <SvgIcon src={Icon} className={style.svg} />}
                </Text>
              </Text>
            ))
          }
        </ul>
      )}
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array,
  setList: PropTypes.func,
};
