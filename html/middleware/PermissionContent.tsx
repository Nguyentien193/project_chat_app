import { Suspense } from 'react';
import routes from './../routes/routes';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { isLogin } from 'utils/jwt';

const PermissionContent = () => {
  const auth = isLogin();
  const location = useLocation();
  const isAdmin = location.pathname.split('/').includes('admin');
  return auth ? (
    <Routes>
      {routes.map((route, idx) => (
        <Route
          key={idx}
          path={route.path}
          element={
            <Suspense fallback={'...'}>
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  ) : (
    <Navigate to={isAdmin ? '/admin/login' : '/dangnhap'} replace state={location} />
  );
};

export default PermissionContent;
