import React from 'react';
import editIcon from '../assets/icon_edit.svg';
import '../styles/TravelPlansList.css';
import { useState } from "react";
import Add from './Add';
const TravelPlanItem = ({ plan, onDeletePlan,index }) => {
  const [modifyScheduleStart, setModifyScheduleStart] = useState(false)
  const handleSetModifyScheduleStart = () =>{
    setModifyScheduleStart(true);
  }
  return (

    <div key={index} className="travel-plan-card">
      {modifyScheduleStart ? <Add btn={true} type={"modify"} scheduleId={plan.id} onOff={setModifyScheduleStart} content={"schedule"} /> : null}
      <div className="travel-plan-header">
        <h4>{plan.tripName}</h4>
        <img src={editIcon} className="edit-plan-icon" onClick={()=>{handleSetModifyScheduleStart()}}/>
      </div>
      <h4>여행지 : {plan.address}</h4>
      <p>{plan.startDate} ~ {plan.endDate}</p>
      <button
        className="delete-plan-button"
        onClick={() => onDeletePlan(index,plan.id)}
      >
        삭제
      </button>
    </div>

  );
};


export default TravelPlanItem;
