import {
  SEARCH_REQUEST,
  SEARCH_REQUEST_SUCCESS,
  SEARCH_REQUEST_ERROR
} from './searchAction';

const initialState = {
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  loading: false,
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
        after: action.after,
        error: '',
      };
    case SEARCH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: '',
      };
    default:
      return state;
  }
};
