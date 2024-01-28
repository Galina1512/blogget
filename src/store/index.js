import {tokenMiddleware, tokenReducer} from './token/tokenReducer.js';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
import {searchReducer} from './search/searchReducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga.js';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    auth: authReducer,
    posts: postsReducer,
    comments: commentsReducer,
    comment: commentReducer,
    search: searchReducer,
  },
  middleware: (getDefauldMiddleware) =>
    getDefauldMiddleware().concat(tokenMiddleware, sagaMiddleware),
});
sagaMiddleware.run(rootSaga);
