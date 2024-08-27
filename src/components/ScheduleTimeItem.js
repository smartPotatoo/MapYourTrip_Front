import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScheduleTimeItem.css';

const ScheduleTimeItem = (props) => {
  return (
    <div className="schedule-time-item-container">
      <div className='palce-name-conatiner'>
        <p>잠실 롯데타워</p>
      </div>
      <div className='time-container'>
        <p>10 : 30</p>
        <p>10 : 40</p>
      </div>
    </div>
  );
};

export default ScheduleTimeItem;