import React from 'react';
import { useState, useEffect } from "react";
import '../styles/ScheduleTimeItem.css';

const ScheduleTimeItem = (props) => {
  const [timeInfo,setTimeInfo] = useState({});
  useEffect(() => {
    if (props.item) {
      setTimeInfo(props.item);
    }
  }, [props.item]);

  useEffect(() => {
  }, [timeInfo]);

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