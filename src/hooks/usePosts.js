import { useState, useEffect, useContext } from 'react';
import urlBestPosts from '../api/bestPosts';
import { tokenContext } from '../context/tokenContext';

const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const { token } = useContext(tokenContext);

  useEffect(() => {
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
