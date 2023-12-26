import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router';
import { selectUserToken } from '../Redux/Auth/selectors';

const PrivateRoute = ({ children }) => {
  const token = useSelector(selectUserToken);
  const location = useLocation();

  return token ? children : <Navigate to="/signin" state={location} />;
};

export default PrivateRoute;
