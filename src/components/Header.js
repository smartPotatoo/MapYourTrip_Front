import React from 'react';
import '../styles/Header.css';
import searchIcon from '../assets/Search.svg';
import {useContext,useState} from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';
import AddScheduleTitle from './AddScheduleTitle';
import Add from './Add';
const Header = () => {
  const {type} = useContext(MapYourTripContext);
  const [addScheduleStart,setAddScheduleStart] = useState(false);
  const handleAddDetailSchedule = () =>{
    setAddScheduleStart(true)
  }
  return (
    <div className="header-container">
      {addScheduleStart ? <Add btn={true} onOff={setAddScheduleStart} type={"create"} content={"schedule"} /> : null}
      <div className="search-bar-container">
        { 
          type ===''?
          <>
            <input className="search-bar" placeholder="Search..." />
            <button className="search-button">
              <img src={searchIcon} alt="Search" />
            </button>
            <input type='button' className='create-schedule-button' value={'completion'} onClick={handleAddDetailSchedule}/>
          </>
          : <AddScheduleTitle/>
        }
        
      </div>
    </div>
  );
};

export default Header;
