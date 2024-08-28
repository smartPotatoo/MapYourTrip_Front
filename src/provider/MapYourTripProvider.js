import { useState } from "react";
import MapYourTripContext from "./MapYourTripContext.js";
const MapYourTripProvider = (props) =>{
  const [type,setType] = useState('');
  const [scheduleId,setScheduleId] = useState('');

  const [detailScheduleInfo,setDetailScheduleInfo] = useState([]);

  const [scheduleTimeInfo,setScheduleTimeInfo] = useState([]);

  //세부일정 생성 날짜
  const [date, setDate] = useState('');

  //시간별 일정 리스트
  const [dateList,setDateList] = useState([]);

  //메모 정보
  const [scheduleMemoinfo, setScheduleMemoinfo] = useState([]);

  const handleSetScheduleMemoinfo = (item) =>{
    setScheduleMemoinfo(item);
  }

  const handleSetDateList = (item) =>{
    setDateList(item);
  }
  const [token, setToken] = useState('');

  const handleSetType = (item) =>{
    setType(item);
  }

  const handleSetDate = (item) => {
    setDate(item);
  }

  const handleSetDetailScheduleInfo = (item) =>{
    setDetailScheduleInfo(item)
    handleSetDateList(item.schedulesDateList);
  }
  const handleSetDetailScheduleDates = (item) =>{
    setDetailScheduleInfo({...detailScheduleInfo,times:item});

  }

  const handleSetScheduleId = (item)=>{
    setScheduleId(item);
  }
  const handleSetScheduleTimeInfo = (item)=>{
    setScheduleTimeInfo(item)
  }
  const handleSetToken = (item) =>{
    setToken(item);
  }


  return (
    <MapYourTripContext.Provider value={{handleSetType,handleSetScheduleMemoinfo,handleSetDateList, handleSetScheduleId,handleSetScheduleTimeInfo, handleSetDetailScheduleInfo,handleSetDetailScheduleDates, handleSetDate, handleSetToken, scheduleMemoinfo,type, scheduleId, detailScheduleInfo,scheduleTimeInfo, date,dateList, token}}>
        {props.children}
    </MapYourTripContext.Provider>
  );
};

export default MapYourTripProvider;