import {applyMiddleware, combineReducers, createStore} from 'redux';
import {tokenMiddleware, tokenReducer} from './token/tokenReducer.js';
import {authReducer} from './auth/authReducer';
import {commentReducer} from './comment/commentReducer';
import {commentsReducer} from './comments/commentsReducer';
import {postsReducer} from './posts/postsReducer.js';
import {composeWithDevTools} from '@redux-devtools/extension';
import {thunk} from 'redux-thunk';

export const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)),
);

