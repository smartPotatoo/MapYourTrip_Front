import {  useRef, useState } from "react";
import MapYourTripContext from "./MapYourTripContext.js";
const MapYourTripProvider = (props) =>{
  const [type,setType] = useState('');
  const [scheduleId,setScheduleId] = useState('');
  const [token, setToken] = useState('');

  const handleSetType = (item) =>{
    setType(item);
  }

  const handleSetScheduleId = (item)=>{
    setScheduleId(item);
  }

  const handleSetToken = (item) =>{
    setToken(item);
  }


  return (
    <MapYourTripContext.Provider value={{handleSetType, handleSetScheduleId, handleSetToken, type, scheduleId, token}}>
        {props.children}
    </MapYourTripContext.Provider>
  );
};

export default MapYourTripProvider;