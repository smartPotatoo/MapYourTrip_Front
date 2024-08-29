import { React, useContext, useState, useEffect } from 'react';
import '../styles/Header.css';
import searchIcon from '../assets/Search.svg';
import MapYourTripContext from '../provider/MapYourTripContext';
import AddScheduleTitle from './AddScheduleTitle';
import Add from './Add';

const Header = () => {
  const { type } = useContext(MapYourTripContext);
  const [addScheduleStart, setAddScheduleStart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // sessionStorage에서 토큰 확인
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태로 간주
  }, []);

  const handleAddDetailSchedule = () => {
    setAddScheduleStart(true);
  };

  return (
    <div className="header-container">
      {addScheduleStart ? <Add btn={true} onOff={setAddScheduleStart} type={"create"} content={"schedule"} /> : null}
      <div className="search-bar-container">
        {
          type === '' ? (
            <>
              <input className="search-bar" placeholder="Search..." />
              <button className="search-button">
                <img src={searchIcon} alt="Search" />
              </button>
              {isLoggedIn && ( // 로그인한 상태에서만 버튼을 표시
                <input type='button' className='create-schedule-button' value={'completion'} onClick={handleAddDetailSchedule} />
              )}
            </>
          ) : (
            <AddScheduleTitle />
          )
        }
      </div>
    </div>
  );
};

export default Header;
