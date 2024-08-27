import React from 'react';
import '../styles/Header.css';
import searchIcon from '../assets/Search.svg';
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
