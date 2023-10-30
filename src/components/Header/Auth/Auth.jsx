import style from './Auth.module.css';
import { useState, useContext } from 'react';

import { SvgIcon } from '../../../UI/Svg';
import { Text } from '../../../UI/Text';
import urlAuth from '../../../api/auth';
import useAuth from '../../../hooks/useAuth';
import { postsContext } from '../../../context/postsContext';
import { deleteToken } from '../../../store/tokenReducer';
import { useDispatch } from 'react-redux';
import DotLoader from 'react-spinners/DotLoader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [loading, auth, clearAuth] = useAuth();
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
      {loading ? (
        <DotLoader color='#cc6633' css={{ display: 'block' }} size={40} />
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
            src='./img/header/login.svg'
            className={style.svg}
          />
        </Text>
        )}
    </div>
  );
};
