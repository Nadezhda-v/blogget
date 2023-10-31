import axios from 'axios';
import urlBestPosts from '../../api/bestPosts';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';
export const POSTS_CLEAR = 'POSTS_REQUEST_CLEAR';

export const postsRequest = () => ({
  type: POSTS_REQUEST,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsClear = () => ({
  type: POSTS_CLEAR,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;
  dispatch(postsRequest());

  axios(urlBestPosts, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${token}`,
    },
  })
    .then(({ data: { data: { children } } }) => {
      dispatch(postsRequestSuccess(children));
    })
    .catch((err) => {
      console.log(err);
      dispatch(postsRequestError(err.message));
    });
};
