import {tokenMiddleware, tokenReducer} from './token/tokenReducer.js';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
    comment: commentReducer,
  },
  middleware: (getDefauldMiddleware) =>
    getDefauldMiddleware().concat(tokenMiddleware),
});

