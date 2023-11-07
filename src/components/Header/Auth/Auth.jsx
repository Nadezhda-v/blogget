import style from './Auth.module.css';
import { useState } from 'react';

import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import urlAuth from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import { deleteToken } from '../../../store/tokenReducer';
import { useDispatch } from 'react-redux';
import Preloader from '../../../UI/Preloader';
import usePosts from '../../../hooks/usePosts';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const dispatch = useDispatch();
  const [loading, auth, clearAuth] = useAuth();
  const { clearPosts } = usePosts();
  const [isLogoutVisible, setLogoutVisible] = useState(false);
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    setLogoutVisible(!isLogoutVisible);
  };

  const handleLogout = () => {
    dispatch(deleteToken());
    clearAuth();
    clearPosts();
    navigate('/');
  };

  return (
    <div className={style.container}>
      {loading ? (
        <Preloader color={'#4a4d7a'} size={40} />
      ) : auth.name ?
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
            src='../../img/header/login.svg'
            className={style.svg}
          />
        </Text>
        )}
    </div>
  );
};
