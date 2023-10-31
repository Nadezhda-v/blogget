import axios from 'axios';
import { URL } from '../../api/constants';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;

  if (!token) return;
  dispatch(commentsRequest());

  axios(`${URL}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(
      ({ data:
        [{
          data: {
            children: [{ data: post }],
          },
        },
        {
          data: { children },
        }]
      }) => {
        const comments = children.map(item => item.data);
        dispatch(commentsRequestSuccess([post, comments]));
      },
    )
    .catch((err) => {
      console.log(err);
      dispatch(commentsRequestError(err.message));
    });
};
