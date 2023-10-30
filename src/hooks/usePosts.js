import { useState, useEffect } from 'react';
import urlBestPosts from '../api/bestPosts';
import { useSelector } from 'react-redux';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const token = useSelector((state) => state.tokenReducer.token);

  useEffect(() => {
    if (!token) return;

    fetch(urlBestPosts, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.headers.get('content-type').includes('text/html')) {
          throw new Error(response.text);
        }

        return response.json();
      })
      .then(({ data }) => {
        setPosts(data.children);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  const clearPosts = () => {
    setPosts([]);
  };

  return { posts, clearPosts };
};

export default usePosts;
