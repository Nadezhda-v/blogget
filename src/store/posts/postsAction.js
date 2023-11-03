import axios from 'axios';
import { URL } from '../../api/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/axios',
  (newPage, { getState }) => {
    let page = getState().posts.page;

    if (newPage) {
      page = newPage;
    }

    const prevPosts = getState().posts.data;
    const token = getState().tokenReducer.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;

    if (!token || isLast) {
      return { data: prevPosts, after, page };
    }

    return axios(`${URL}/${page}?limit=10${after ? `&after=${after}` : ''}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`,
      },
    })
      .then(({ data: { data } }) => {
        let newPosts = data.children;

        if (after) {
          newPosts = [...prevPosts, ...newPosts];
        }

        return ({
          data: newPosts,
          after: data.after,
          page,
        });
      })
      .catch((error) => ({ error: error.message }));
  }
);
