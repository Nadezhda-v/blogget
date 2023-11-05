import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { postsRequestAsync } from '../store/posts/postsAction';
import { postsSlice } from '../store/posts/postsSlice';

const usePosts = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer.token);
  const posts = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);

  useEffect(() => {
    // dispatch(postsRequestAsync());
  }, [token]);

  const clearPosts = () => {
    dispatch(postsSlice.actions.postsClear());
  };

  return { loading, posts, clearPosts };
};

export default usePosts;
