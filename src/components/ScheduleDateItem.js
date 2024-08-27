import React, { useState } from 'react';
import ScheduleTimeItem from './ScheduleTimeItem'
import Add from './Add';

import '../styles/ScheduleDateItem.css';

const ScheduleDateItem = (props) => {
  const [addScheduleStart,setAddScheduleStart] = useState(false);
  const [addMemoStart, setAddMemoStart] = useState(false);


  //schedule 추가 창
  const handleAddDetailSchedule = () =>{
    setAddScheduleStart(true)
  }

  //memo 추가 창
  const handleAddMemo = () =>{
    setAddMemoStart(true)
  }

  return (
    <div className="schedule-date-item-container">
      {addScheduleStart ? <Add btn={true} onOff={setAddScheduleStart} content={"schedule"} /> : null}
      {addMemoStart ? <Add btn={true} onOff={setAddMemoStart} content={"memo"} /> : null}
      <div className='detail-date-container'>
        <div className='date-container'>
          <p>D{props.index} - {props.item.date}</p>
        </div>
        <div className='detail-schedule-container'>
          <div className='time-memo-list-container'>
            <ScheduleTimeItem/>


            <p></p>
          </div>
          <div className='schedule-add-container'>
            <input className='detail-add-button' type='button' value={"장소 추가"} onClick={handleAddDetailSchedule}/>
            <input className='detail-memo-button' type='button' value={"메모 추가"} onClick={handleAddMemo}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDateItem;