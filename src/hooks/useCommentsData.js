import { useEffect, useState, useContext } from 'react';
import { tokenContext } from '../context/tokenContext';
import { URL } from '../api/constants';

const useCommentsData = (id) => {
  const [comments, setComments] = useState([]);
  const { token } = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }

        return response.json();
      })
      .then(
        ([
          {
            data: {
              children: [{ data: post }],
            },
          },
          {
            data: { children },
          },
        ]) => {
          const comments = children.map(item => item.data);
          setComments([post, comments]);
        },
      )
      .catch((err) => {
        console.log(err);
      });
  }, [token]);

  return [comments];
};

export default useCommentsData;
