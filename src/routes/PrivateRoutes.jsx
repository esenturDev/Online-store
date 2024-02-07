import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ isAuth, component }) => {
  console.log(isAuth);
  if (isAuth) {
    return component;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoutes;
