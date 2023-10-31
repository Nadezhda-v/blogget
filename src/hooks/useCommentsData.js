import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsRequestAsync } from '../store/comments/commentsAction';

const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.data);
  const status = useSelector((state) => state.comments.status);
  const token = useSelector((state) => state.tokenReducer.token);

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [comments, status];
};

export default useCommentsData;
