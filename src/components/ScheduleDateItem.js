import React, { useState } from 'react';
import ScheduleTimeItem from './ScheduleTimeItem'
import Confirm from './Confirm';

import '../styles/ScheduleDateItem.css';

const ScheduleDateItem = (props) => {
  const [confirmStat,setConfirmStat] = useState(false);
  
  const handleAddDetailSchedule = () =>{
    setConfirmStat(true)
  }

  return (
    <div className="schedule-date-item-container">
      {confirmStat ? <Confirm content="보정을 시작하시겠습니까?" btn={true} onOff={setConfirmStat} /> : null}
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
            <input className='detail-memo-button' type='button' value={"메모 추가"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDateItem;