import { useState, useEffect } from 'react';
import {
  BASE_URL,
  TOKEN_TYPE_HINT,
  CLIENT_ID,
} from '../api/constants';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');

      setToken(token);
    }

    if (localStorage.getItem('bearer', token)) {
      setToken(localStorage.getItem('bearer', token));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    if (token) {
      const formData = new URLSearchParams();
      formData.append('token', token);
      formData.append('token_type_hint', TOKEN_TYPE_HINT);

      fetch(`${BASE_URL}/api/v1/revoke_token`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': 'Basic ' + btoa(CLIENT_ID + ':'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
        .then(response => {
          if (response.status === 401) {
            localStorage.removeItem('bearer');
          } else {
            localStorage.removeItem('bearer');
            window.history.replaceState({}, document.title, '/');
            setToken('');
          }
        })
        .catch(error => {
          console.error('Ошибка при отзыве токена:', error);
        });
    }
  };

  return [token, delToken];
};
