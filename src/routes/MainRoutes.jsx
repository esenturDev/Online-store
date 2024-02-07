import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Sales from '../pages/sales/Sales';
import Branch from '../pages/branch/Branch';
import NotFound from '../pages/notFound/NotFoundPage';
import Login from '../pages/login/Login';
import Admin from '../pages/admin/Admin';
import PrivateRoutes from './PrivateRoutes';

const MainRoutes = () => {
  const isLogin = Boolean(localStorage.getItem('isLogin'));
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/branch" element={<Branch />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={<PrivateRoutes component={<Admin />} isAuth={isLogin} />}
        />
      </Routes>
    </>
  );
};

export default MainRoutes;
