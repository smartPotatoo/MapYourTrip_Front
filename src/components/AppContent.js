import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Login from './Login';
import Signup from './Signup';
import MyPage from './MyPage';
import WrappedMap from './Map';


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
          {!isAuthPage && <WrappedMap />}  {/* WrappedMap 컴포넌트를 로그인 페이지가 아닌 경우에만 렌더링 */}
        </div>
      </div>
    );
};
  
  export default AppContent;