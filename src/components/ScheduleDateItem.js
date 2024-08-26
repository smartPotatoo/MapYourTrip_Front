import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ScheduleDateItem.css';

const ScheduleDateItem = (props) => {
  return (
    <div className="schedule-date-item-container">
      <div className='detail-date-container'>
        <div className='date-container'>
          <p>D{props.index} - {props.item.date}</p>
        </div>
        <div className='detail-schedule-container'>
          <div className='time-memo-list-container'>

          </div>
          <div className='schedule-add-container'>
            <input className='detail-add-button' type='button' value={"장소 추가"}/>
            <input className='detail-memo-button' type='button' value={"메모 추가"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDateItem;