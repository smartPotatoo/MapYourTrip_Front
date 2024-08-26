import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/user/login'; 

  return (
    <div id="app-root" style={{
      display: isLoginPage ? 'block' : 'flex',
      justifyContent: isLoginPage ? 'center' : 'flex-start',
      alignItems: isLoginPage ? 'center' : 'flex-start',
      height: '100vh'
    }}>
      {!isLoginPage && <Sidebar />}
      <div style={{ flexGrow: 1 }}>
        {!isLoginPage && <Header />}
        <div style={{
          flexGrow: 1,
          padding: isLoginPage ? '0' : '20px',
          display: isLoginPage ? 'flex' : 'block',
          justifyContent: isLoginPage ? 'center' : 'flex-start',
          alignItems: isLoginPage ? 'center' : 'flex-start',
        }}>
          <Routes>
            <Route path="/user/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
