import { useState, useEffect } from 'react';

const useAuth = (token, URL) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(URL, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ name, icon_img: img }) => {
        const image = img.replace(/\?.*$/, '');
        setAuth({ name, image });
      })
      .catch(() => setAuth({}));
  }, [token]);

  return { auth, setAuth };
};

export default useAuth;
