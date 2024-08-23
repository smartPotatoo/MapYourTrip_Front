import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2 className="logo-text">MapYourTrip</h2>
      <div className="menu-item">Sign Up</div>
      <div className="menu-item">Login</div>
      <div className="menu-item">Travel Plans</div>
      <div className="menu-item">Map</div>
    </div>
  );
};

export default Sidebar;
