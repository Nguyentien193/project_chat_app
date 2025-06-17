import React, { Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';

const PermissionContent = React.lazy(() => import('../middleware/PermissionContent'));
const loading = () => <div>Loading ...</div>;

const DefaultLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="body_web">
      <div className="layout">
        <Navbar />
        <div className="container_main">
          <Header />
          <main className="page_container">
            <Suspense fallback={loading()}>
              <PermissionContent />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
