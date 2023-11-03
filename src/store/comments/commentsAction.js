import axios from 'axios';
import { URL } from '../../api/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const commentsRequestAsync = createAsyncThunk(
  'comments/axios',
  (id, { getState }) => {
    const token = getState().tokenReducer.token;

    if (!token) return;

    return axios(`${URL}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(
        ({ data:
          [{
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          }]
        }) => {
          const comments = children.map(item => item.data);
          return { data: [post, comments] };
        },
      )
      .catch((error) => ({ error: error.message }));
  }
);
