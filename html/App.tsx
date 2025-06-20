import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route, Router, useLocation } from 'react-router-dom';
import loadable from '@loadable/component';
import { history } from './routes/history';
import { AppProvider } from './contextProvider/AppContext';
import './assets/scss/main.scss';
import { handleError, isLogin } from 'utils/jwt';
import { apiDetailSettingWeb } from 'pages/api/apiStore';

const DefaultLayout = loadable(() => import('./layouts/DefaultLayout'));
const HomePage = loadable(() => import('./pages/HomePage'));
const Login = loadable(() => import('./pages/Login'));
const ZaloPage = loadable(() => import('./pages/zalo_page/ZaloPage'));
const LoginAdmin = loadable(() => import('./pages/LoginAdmin'));

const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });
  useLayoutEffect(() => history.listen(setState), [history]);
  return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};

const App: React.FC = () => {
  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    try {
      const res = await apiDetailSettingWeb();
      if (res) {
        const { image_url, main_account } = res.data;
        localStorage.setItem(
          'info',
          JSON.stringify({
            image_url,
            main_account,
          }),
        );
      }
    } catch (error) {
      handleError(error);
    }
  };
  return (
    <AppProvider>
      <CustomRouter history={history}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/taikhoan" element={<ZaloPage />} />
          <Route path="/baomat" element={<ZaloPage />} />
          <Route path="/mokhoa/:id" element={<ZaloPage />} />
          <Route path="/zalo" element={<ZaloPage />} />
          <Route path="/xemtinnhan/:id" element={<ZaloPage />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/*" element={<DefaultLayout />} />
        </Routes>
      </CustomRouter>
    </AppProvider>
  );
};

export default App;
