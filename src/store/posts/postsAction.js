import axios from 'axios';
import { URL } from '../../api/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/axios',
  (params, { getState }) => {
    const { newPage, search } = params || {};
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

    let url = `${URL}/${page}?limit=10${after ? `&after=${after}` : ''}`;

    if (search) {
      url = `${URL}/search?q=${search}&limit=10${after ?
        `&after=${after}` : ''}`;
    }

    console.log('url: ', url);

    return axios(`${url}`, {
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
