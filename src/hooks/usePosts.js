import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  postsClear,
  postsRequestAsync,
} from '../store/posts/postsAction';

const usePosts = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer.token);
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  const clearPosts = () => {
    dispatch(postsClear());
  };

  return { loading, posts, clearPosts };
};

export default usePosts;
