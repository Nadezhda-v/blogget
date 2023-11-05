import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './postsAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  search: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsClear: (state) => {
      state.loading = false;
      state.data = [];
      state.error = '';
      state.after = '';
      state.isLast = false;
      state.page = '';
      state.search = '';
    },
    changePage: (state, action) => {
      state.after = '';
      state.isLast = false;
      state.page = action.payload.page;
      state.search = '';
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.page = action.payload.page;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export const postsReducer = postsSlice.reducer;
