import React from 'react';
import '../styles/Header.css';
import searchIcon from '../assets/Search.svg';

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-bar-container">
        <input className="search-bar" placeholder="Search..." />
        <button className="search-button">
          <img src={searchIcon} alt="Search" />
        </button>
      </div>
    </div>
  );
};

export default Header;
