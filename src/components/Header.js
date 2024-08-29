import React, { useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // useLocation 훅을 임포트하여 현재 경로를 확인
import '../styles/Header.css';
import searchIcon from '../assets/Search.svg';
import MapYourTripContext from '../provider/MapYourTripContext';
import AddScheduleTitle from './AddScheduleTitle';
import Add from './Add';

const Header = () => {
  const { type } = useContext(MapYourTripContext);
  const [addScheduleStart, setAddScheduleStart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    // sessionStorage에서 토큰 확인
    const token = sessionStorage.getItem('token');
    setIsLoggedIn(!!token); // 토큰이 있으면 로그인 상태로 간주
  }, []);

  const handleAddDetailSchedule = () => {
    setAddScheduleStart(true);
  };

  // 현재 경로에 따라 버튼의 value를 설정
  const buttonValue =
    location.pathname === '/main' || location.pathname === '/' || location.pathname === '/mypage'
      ? 'New Plans'
      : 'completion';

  return (
    <div className="header-container">
      {addScheduleStart ? <Add btn={true} onOff={setAddScheduleStart} type={"create"} content={"schedule"} /> : null}
      <div className="search-bar-container">
        {
          type === '' ? (
            <>
              {isLoggedIn && ( // 로그인한 상태에서만 버튼을 표시
                <input type='button' className='create-schedule-button' value={buttonValue} onClick={handleAddDetailSchedule} />
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
