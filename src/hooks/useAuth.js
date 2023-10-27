import { useState, useEffect, useContext } from 'react';
import { tokenContext } from '../context/tokenContext';
import { URL } from '../api/constants';

const useAuth = () => {
  const [auth, setAuth] = useState({});
  const { token, delToken } = useContext(tokenContext);

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
        delToken();
        setAuth({});
      });
  }, [token]);

  const clearAuth = () => {
    setAuth({});
  };

  return [auth, clearAuth];
};

export default useAuth;
