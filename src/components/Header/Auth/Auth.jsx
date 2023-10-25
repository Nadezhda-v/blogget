import style from './Auth.module.css';
import { useState, useContext } from 'react';

import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import { URL } from '../../../api/constants';
import urlAuth from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import { tokenContext } from '../../../context/tokenContext';

export const Auth = () => {
  const { token, delToken } = useContext(tokenContext);
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const { auth, clearAuth } = useAuth(token, `${URL}/api/v1/me`);

  const handleAvatarClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };

  const handleDelToken = () => {
    delToken();
    clearAuth();
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
