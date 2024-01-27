import axios from 'axios';
import {URL_API} from '../../API/const';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postRequestAsync = createAsyncThunk(
  'post/fetch',
  (newPage, {getState}) => {
    const page = newPage || getState().posts.page;
    const token = getState().token.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;

    if (!token || isLast) return;
    const aft = `after=${after}`;
    return axios(`${URL_API}/${page}?limit=3&${after ? aft : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => data.data)
      .catch((err) => ({error: err.toString()}));
  }
);


