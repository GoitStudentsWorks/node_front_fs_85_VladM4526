import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  selectUserToken,
  selectIsRefreshing,
} from '../../redux-files/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
