import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login'; // 현재 경로가 /login 인지 확인

  return (
    <div>
      {!isLoginPage && <Sidebar />}
      {/* 로그인 페이지가 아닌 경우에만 사이드바를 렌더링 */}
      <div style={{ flexGrow: 1 }}>
        {!isLoginPage && <Header />}
        {/* 로그인 페이지가 아닌 경우에만 헤더를 렌더링 */}
        <div style={{ padding: isLoginPage ? '0' : '20px' }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* 다른 라우트를 추가하여 여러 페이지를 렌더링 할 수 있음 */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    {/* Router로 AppContent를 감싸서 useLocation 훅이 정상적으로 동작하도록 설정 */}
    <AppContent />
  </Router>
);

export default App;
