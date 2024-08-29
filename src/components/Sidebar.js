import  { React,useEffect, useState,useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import DetailScheduleList from './DetailScheduleList';
import MapYourTripContext from '../provider/MapYourTripContext';

const Sidebar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {type} = useContext(MapYourTripContext);

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
      <Link to="/main">
        <h2 className="logo-text">MapYourTrip</h2>
      </Link>
      {!isLoggedIn && !type ? (
        <>
          <div><Link to="/open-api/join" className="menu-item">Sign Up</Link></div>
          <div><Link to="/open-api/login" className="menu-item">Login</Link></div>
          <div><Link to="/main" className="menu-item">Travel Plans</Link></div>
          <div className="menu-item">Map</div>
        </>
      ) : (
        <>
          {
            type ==='create' || type === 'view' || type === 'modify' ? 
            <DetailScheduleList/>
            :
            <div className='login-sidebar-container'>
              <Link to="/main" className="menu-item">Travel Plans</Link>
              <div className="menu-item">Map</div>
            </div>
          }
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
