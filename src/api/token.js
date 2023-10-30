import {
  BASE_URL,
  TOKEN_TYPE_HINT,
  CLIENT_ID,
} from '../api/constants';

const setToken = (token) => {
  localStorage.setItem('bearer', token);
};

const getToken = () => {
  let token = '';

  if (location.pathname.includes('/auth')) {
    token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');

    setToken(token);
  }

  if (localStorage.getItem('bearer')) {
    token = localStorage.getItem('bearer');
    setToken(token);
  }

  return token;
};

const delToken = () => {
  const token = getToken();

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
          throw new Error(response.text);
        }

        localStorage.removeItem('bearer');
        window.history.replaceState({}, document.title, '/');
        setToken('');
      })
      .catch(error => {
        console.error('Ошибка при отзыве токена:', error);
        setToken('');
      });
  }
};

export {
  getToken,
  setToken,
  delToken,
};
