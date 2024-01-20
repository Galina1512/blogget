import {getComments} from '../../API/getComments';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const GET_COMMENTS = 'GET_COMMENTS';

const initialState = {
  post: getComments(),
  comments: getComments(),
  status: '',
  error: '',
};

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        post: action.post,
        comments: action.comments,
        error: '',
        status: 'loaded',
      };
    default:
      return state;
  }
};
