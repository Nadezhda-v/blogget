import style from './Auth.module.css';
import { useState, useContext } from 'react';

import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import urlAuth from '../../../api/auth';
import { authContext } from '../../../context/authContext';
import { postsContext } from '../../../context/postsContext';
import { deleteToken } from '../../../store';
import { useDispatch } from 'react-redux';

export const Auth = () => {
  const dispatch = useDispatch();
  const { auth, clearAuth } = useContext(authContext);
  const { clearPosts } = useContext(postsContext);
  const [isLogoutVisible, setLogoutVisible] = useState(false);

  const handleAvatarClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };

  const handleLogout = () => {
    dispatch(deleteToken());
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

          {isLogoutVisible && (
            <button
              className={style.logout}
              onClick={handleLogout}
            >
              {'Выйти'}
            </button>
          )}
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
