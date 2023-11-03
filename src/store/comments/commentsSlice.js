import { createSlice } from '@reduxjs/toolkit';
import { commentsRequestAsync } from './commentsAction';

const initialState = {
  status: '',
  data: [],
  error: '',
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload.data;
      state.error = '';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload.error;
    },
  }
});

export const commentsReducer = commentsSlice.reducer;
