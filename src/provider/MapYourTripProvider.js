import {  useRef, useState } from "react";
import MapYourTripContext from "./MapYourTripContext.js";
const MapYourTripProvider = (props) =>{
  const [type,setType] = useState('');
  const [scheduleId,setScheduleId] = useState('');

  const handleSetType = (item) =>{
    setType(item);
  }

  const handleSetScheduleId = (item)=>{
    setScheduleId(item);
  }


  return (
    <MapYourTripContext.Provider value={{handleSetType, handleSetScheduleId, type, scheduleId}}>
        {props.children}
    </MapYourTripContext.Provider>
  );
};

export default MapYourTripProvider;