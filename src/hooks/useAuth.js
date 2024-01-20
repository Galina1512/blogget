import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout, getAuth} from '../store/auth/auth';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth.auth);
  const token = useSelector((state) => state.token.token);
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuth());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());

  return [auth, loading, clearAuth];
};
