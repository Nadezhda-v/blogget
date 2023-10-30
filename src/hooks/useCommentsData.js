import { useEffect, useState } from 'react';
import { URL } from '../api/constants';
import { useSelector } from 'react-redux';

const useCommentsData = (id) => {
  const [comments, setComments] = useState([]);
  const token = useSelector((state) => state.tokenReducer.token);

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
