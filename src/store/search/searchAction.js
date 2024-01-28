export const SEARCH_REQUEST = 'SEARH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_ERROR = 'SEARH_REQUEST_ERROR';

export const searchRequest = (search) => ({
  type: SEARCH_REQUEST,
  search,
});
export const searchRequestSuccess = ({children, after}) => ({
  type: SEARCH_REQUEST_SUCCESS,
  posts: children,
  after,
});
export const searchRequestError = (error) => ({
  type: SEARCH_REQUEST_ERROR,
  error,
});

