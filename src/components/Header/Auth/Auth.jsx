import style from './Auth.module.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import { URL } from '../../../api/constants';
import urlAuth from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';

export const Auth = ({ token, delToken }) => {
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const { auth, setAuth } = useAuth(token, `${URL}/api/v1/me`);

  const handleAvatarClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };

  const handleDelToken = () => {
    delToken();
    setAuth({});
  };

  return (
    <div className={style.container}>
      {auth.name ?
        (<div className={style.btn} onClick={handleAvatarClick}>
          <img
            className={style.img}
            src={auth.image}
            title={auth.name}
            alt='Аватар'
          />

          <button
            className={`${style.logout} ${isLogoutVisible ? '' : style.hide}`}
            onClick={handleDelToken}
          >
            {'Выйти'}
          </button>
        </div>) :
        (<Text className={style.authLink} As='a' href={urlAuth}>
          <SvgIcon
            src='./img/header/login.svg'
            className={style.svg}
          />
        </Text>
        )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
