const initinalState = {
  comment: '',
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';

const updateComment = (comment) => ({
  type: UPDATE_COMMENT,
  comment,
});

const formCommentReducer = (state = initinalState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    default:
      return state;
  }
};

export {
  updateComment,
  formCommentReducer,
};
