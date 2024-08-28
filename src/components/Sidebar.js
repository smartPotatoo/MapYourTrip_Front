import  { React,useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import DetailScheduleList from './DetailScheduleList';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // sessionStorage에서 토큰 확인
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태로 간주
  }, []);

  const handleLogout = () => {
    // 로그아웃 처리: sessionStorage에서 토큰 제거하고 로그인 페이지로 이동
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/open-api/login');
  };

  return (
    <div className="sidebar-container">
      <h2 className="logo-text">MapYourTrip</h2>
      {!isLoggedIn ? (
        <>
          <div><Link to="/open-api/join" className="menu-item">Sign Up</Link></div>
          <div><Link to="/open-api/login" className="menu-item">Login</Link></div>
          <div className="menu-item">Travel Plans</div>
          <div className="menu-item">Map</div>
        </>
      ) : (
        <>
          <DetailScheduleList />
          <div className="profile-logout-container">
            <Link to="/mypage" className="menu-item small-button">Profile</Link>
            <div className="menu-item small-button logout-button" onClick={handleLogout}>Sign Out</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
