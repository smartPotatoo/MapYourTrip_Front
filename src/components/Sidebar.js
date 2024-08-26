import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2 className="logo-text">MapYourTrip</h2>
      <div className="menu-item">Sign Up</div>
      <div><Link to="/user/login" className="menu-item">Login</Link></div>
      <div className="menu-item">Travel Plans</div>
      <div className="menu-item">Map</div>
    </div>
  );
};

export default Sidebar;
