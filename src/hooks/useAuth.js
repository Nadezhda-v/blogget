import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, authRequestAsync } from '../store/auth/authAction';

const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer.token);
  const auth = useSelector((state) => state.auth.data);
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => {
    dispatch(authLogout());
  };

  return [loading, auth, clearAuth];
};

export default useAuth;
