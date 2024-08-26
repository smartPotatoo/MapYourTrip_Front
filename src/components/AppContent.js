import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Login from './Login';

const AppContent = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/user/login'; 
  
    return (
      <div id="app-root" className={isLoginPage ? 'login-page' : 'default-page'}>
        {!isLoginPage && <Sidebar />}
        <div className="content-wrapper">
          {!isLoginPage && <Header />}
          <div className={`content-container ${isLoginPage ? 'centered' : ''}`}>
            <Routes>
              <Route path="/user/login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  };
  
  export default AppContent;