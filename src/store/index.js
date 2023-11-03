import { tokenMiddleware, tokenReducer } from './tokenReducer';
import { formCommentReducer } from './formCommentReducer';
import { authReducer } from './auth/authReducer';
import { commentsReducer } from './comments/commentsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './posts/postsSlice';

export const store = configureStore({
  reducer: {
    tokenReducer,
    formCommentReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
