import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScheduleTimeItem.css';

const ScheduleTimeItem = (props) => {
  console.log(props.item)
  return (
    <div className="schedule-time-item-container">
      <div className='palce-name-conatiner'>
        <p>{props.item.name}</p>
      </div>
      <div className='time-container'>
        <p>{props.item.startTime}</p>
        <p>{props.item.endTime}</p>
      </div>
    </div>
  );
};

export default ScheduleTimeItem;