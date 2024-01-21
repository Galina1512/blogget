export const UPDATE_TOKEN = 'UPDATE_TOKEN';
export const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateToken = (token) => ({
  type: UPDATE_TOKEN,
  token,
});

export const delToken = () => ({
  type: DELETE_TOKEN,
  token: '',
});
