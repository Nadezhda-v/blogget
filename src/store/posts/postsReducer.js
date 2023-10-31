import {
  POSTS_REQUEST,
  POSTS_REQUEST_ERROR,
  POSTS_REQUEST_SUCCESS,
  POSTS_CLEAR,
} from './postsAction';

const initinalState = {
  loading: false,
  data: [],
  error: '',
};

export const postsReducer = (state = initinalState, action) => {
  switch (action.type) {
    case POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case POSTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case POSTS_CLEAR:
      return {
        ...state,
        data: [],
      };

    default:
      return state;
  }
};
