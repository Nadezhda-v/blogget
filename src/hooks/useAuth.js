import { useState, useEffect } from 'react';
import { URL } from '../api/constants';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store';

const useAuth = () => {
  const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ name, icon_img: img }) => {
        const image = img.replace(/\?.*$/, '');
        setAuth({ name, image });
      })
      .catch((err) => {
        console.log(err);
        dispatch(deleteToken());
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => {
    setAuth({});
  };

  return [auth, clearAuth];
};

export default useAuth;
