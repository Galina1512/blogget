import {
  POST_REQUEST,
  POST_REQUEST_ERROR,
  POST_REQUEST_SUCCESS,
} from './postsAction';

const initialState = {
  posts: [],
  status: '',
  error: '',
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case POST_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        posts: action.posts,
        error: '',
      };
    case POST_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        status: 'error',
      };
    default:
      return state;
  }
};
