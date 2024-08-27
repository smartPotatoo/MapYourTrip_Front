import React from 'react';
import '../styles/Header.css';
import searchIcon from '../assets/Search.svg'; // 이미지 경로를 올바르게 설정
import {useContext} from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';
import AddScheduleTitle from './AddScheduleTitle';

const Header = () => {
  const {type} = useContext(MapYourTripContext);

  return (
    <div className="header-container">
      <div className="search-bar-container">
        { 
          type ===''?
          <>
            <input className="search-bar" placeholder="Search..." />
            <button className="search-button">
              <img src={searchIcon} alt="Search" />
            </button>
          </>
          : <AddScheduleTitle/>
        }
        
      </div>
    </div>
  );
};

export default Header;
