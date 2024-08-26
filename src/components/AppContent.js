import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MyPage from './MyPage';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/open-api/login';
  const isSignupPage = location.pathname === '/open-api/join';
  
  const isAuthPage = isLoginPage || isSignupPage; // 인증 관련 페이지인지 확인

  return (
    <div id="app-root" className={isAuthPage ? 'auth-page' : 'default-page'}>
      {!isAuthPage && <Sidebar />}
      <div className="content-wrapper">
        {!isAuthPage && <Header />}
        <div className={`content-container ${isAuthPage ? 'centered' : ''}`}>
          <Routes>
            <Route path="/open-api/login" element={<Login />} />
            <Route path="/open-api/join" element={<Signup />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AppContent;
