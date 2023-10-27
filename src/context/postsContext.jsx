import React from 'react';
import PropTypes from 'prop-types';
import usePosts from '../hooks/usePosts';

const postsContext = React.createContext({});

const PostsContextProvider = ({ children }) => {
  const { posts, clearPosts } = usePosts([]);

  return (
    <postsContext.Provider value={{ posts, clearPosts }}>
      {children}
    </postsContext.Provider>
  );
};

PostsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  postsContext,
  PostsContextProvider,
};
