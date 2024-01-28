import {combineReducers, createStore} from 'redux';
import {tokenReducer} from './token/token.js';
import {authReducer} from './auth/auth.js';
import {commentReducer} from './comment/comment.js';
import {commentsReducer} from './comments/comments.js';

export const rootReducer = combineReducers({
  tokenReducer,
  authReducer,
  commentReducer,
  commentsReducer,
});

export const store = createStore(rootReducer);
