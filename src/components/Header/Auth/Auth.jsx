import style from './Auth.module.css';
import { useState, useContext } from 'react';

import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import urlAuth from '../../../api/auth';
import { authContext } from '../../../context/authContext';
import { tokenContext } from '../../../context/tokenContext';
import { postsContext } from '../../../context/postsContext';

export const Auth = () => {
  const { delToken } = useContext(tokenContext);
  const { auth, clearAuth } = useContext(authContext);
  const { clearPosts } = useContext(postsContext);
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  const handleAvatarClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };

  const handleDelToken = () => {
    delToken();
    clearAuth();
    clearPosts();
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
