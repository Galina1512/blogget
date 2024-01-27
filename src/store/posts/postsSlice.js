import {createSlice} from '@reduxjs/toolkit';
import {postRequestAsync} from './postsAction';

const initialState = {
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  loading: false,
};

export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.posts = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postRequestAsync.pending, (state) => {
        state.error = '';
        state.loading = true;
      })
      .addCase(postRequestAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = [...state.posts, ...action.payload.children];
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(postRequestAsync.rejected, (state, action) => {
        state.error = action.payload.error;
        state.loading = false;
      });
  },
});

export default postsSlice.reducer;
