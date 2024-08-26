import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2 className="logo-text">MapYourTrip</h2>
      <div><Link to="/open-api/join" className="menu-item">Sign Up</Link></div> {/* 링크 수정 */}
      <div><Link to="/open-api/login" className="menu-item">Login</Link></div> {/* 링크 수정 */}
      <div className="menu-item">Travel Plans</div>
      <div className="menu-item">Map</div>
    </div>
  );
};

export default Sidebar;
