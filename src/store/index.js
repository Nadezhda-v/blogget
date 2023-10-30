import { createStore } from 'redux';
import { getToken, setToken, delToken } from '../api/token';

const initinalState = {
  comment: '',
  token: getToken(),
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

const deleteToken = () => ({
  type: DELETE_TOKEN,
});

const rootReducer = (state = initinalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      delToken();
      return {
        ...state,
        token: '',
      };

    default:
      return state;
  }
};

const store = createStore(rootReducer);

export {
  store,
  updateComment,
  updateToken,
  deleteToken,
};
