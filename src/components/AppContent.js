import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Login from './Login';
import WrappedMap from './Map';
import Signup from './Signup'; // Signup 컴포넌트를 가져옵니다.

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/open-api/login';
  const isSignupPage = location.pathname === '/open-api/join'; // 회원가입 페이지 확인

  const isAuthPage = isLoginPage || isSignupPage; // 인증 관련 페이지인지 확인
  
    return (
      <div id="app-root" className={isAuthPage ? 'auth-page' : 'default-page'}>
        {!isLoginPage && <Sidebar />}
        <div className="content-wrapper">
          {!isLoginPage && <Header />}
          <div className={`content-container ${isLoginPage ? 'centered' : ''}`}>
            <Routes>
              <Route path="/open-api/login" element={<Login />} />
              <Route path="/open-api/join" element={<Signup />} /> {/* 회원가입 페이지 추가 */}
            </Routes>
          </div>
          {!isLoginPage && <WrappedMap />}
        </div>
      </div>
    );
};
  
  export default AppContent;