import React, { useState, useContext, useEffect } from 'react';
import ScheduleTimeItem from './ScheduleTimeItem'
import Add from './Add';
import '../styles/ScheduleDateItem.css';
import MapYourTripContext from '../provider/MapYourTripContext';

const ScheduleDateItem = (props) => {
  const [addScheduleStart,setAddScheduleStart] = useState(false);
  const [addMemoStart, setAddMemoStart] = useState(false);
  const {handleSetDate, view, handleSetScheduleMemoinfo} = useContext(MapYourTripContext);
  //schedule 추가 창
  const handleAddDetailSchedule = () =>{
    handleSetDate(props.item.date)
    setAddScheduleStart(true)
  }

  //memo 추가 창
  const handleAddMemo = () =>{
    handleSetScheduleMemoinfo(props.item.content)
    handleSetDate(props.item.date)
    setAddMemoStart(true)
  }

  return (
    <div className="schedule-date-item-container">
      {addScheduleStart ? <Add btn={true} onOff={setAddScheduleStart} content={"date"} /> : null}
      {addMemoStart ? <Add btn={true} onOff={setAddMemoStart} content={"memo"} /> : null}
      <div className='detail-date-container'>
        <div className='date-container'>
          <p>D{props.index+1} - {props.item.date}</p>
        </div>
        <div className='detail-schedule-container'>
          <div className='time-memo-list-container'>
            { props.item.times.length !== 0 ?
              props.item.times.map((item,index)=>(
                <ScheduleTimeItem key={index} item={item}/>
              ))
              :<div className='time-empty'></div>
            }

            <pre className='memo'>
              {props.item.content}
            </pre>
          </div>
            {
              !view ?
              <div className='schedule-add-container'>
              
                <input className='detail-add-button' type='button' value={"장소 추가"} onClick={handleAddDetailSchedule}/>
                <input className='detail-memo-button' type='button' value={"메모 추가"} onClick={handleAddMemo}/>
              </div>
              :null
            }
            
        </div>
      </div>
    </div>
  );
};

export default ScheduleDateItem;