import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';
import DetailScheduleList from './DetailScheduleList';
import MapYourTripContext from '../provider/MapYourTripContext';

const Sidebar = () => {
  const { type, handleSetType, handleSetToken } = useContext(MapYourTripContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 처리: 토큰과 type을 초기화하고 로그인 페이지로 이동
    handleSetToken('');
    handleSetType('');
    sessionStorage.removeItem('token'); // sessionStorage에서 토큰 제거
    navigate('/open-api/login'); // 로그인 페이지로 리다이렉트
  };

  return (
    <div className="sidebar-container">
      <h2 className="logo-text">MapYourTrip</h2>
      {type === '' ? (
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
