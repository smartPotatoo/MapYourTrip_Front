import React, { useEffect, useContext, useState } from 'react';
import '../styles/DetailScheduleList.css';
import ScheduleDateItem from './ScheduleDateItem'
import MapYourTripContext from '../provider/MapYourTripContext';
import axios from 'axios';
const DetailScheduleList = () => {
  const {handleSetDetailScheduleInfo, detailScheduleInfo, scheduleId, scheduleTimeInfo, date, handleSetDateList,dateList} = useContext(MapYourTripContext);
  const getSchedule = () =>{
    axios.get((`http://localhost:8081/open-api/schedule/${scheduleId}/detail`))
    .then(res=>{
      handleSetDetailScheduleInfo(res.data.body)
    }).catch(err=>{
      console.log(err);
    })
    
  }
  useEffect(()=>{
    getSchedule();
  },[])

  

  useEffect(()=>{
    console.log(detailScheduleInfo);
    let startDate = detailScheduleInfo.startDate;
    let endDate = detailScheduleInfo.endDate
    if(detailScheduleInfo.length !== 0){
      //시작날짜와 종료날짜에 따른 일일 날짜 리스트 생성
      const start = new Date(`20${startDate.slice(0, 2)}-${startDate.slice(2, 4)}-${startDate.slice(4, 6)}`);
      const end = new Date(`20${endDate.slice(0, 2)}-${endDate.slice(2, 4)}-${endDate.slice(4, 6)}`);

      let currentDate = new Date(start);
      const dates = [];

      while (currentDate <= end) {
        const formattedDate = currentDate.toISOString().split('T')[0].replace(/-/g, '');
          dates.push({
            schedulesId: detailScheduleInfo.id, 
            date: formattedDate,
            content: ``, 
            times: []
        });
          currentDate.setDate(currentDate.getDate() + 1);
      }
      handleSetDateList(dates);
      
    }
    
  },[detailScheduleInfo])

  useEffect(()=>{
    if(scheduleTimeInfo.lenth !== 0){
      console.log(scheduleTimeInfo);
      dateList.forEach((item)=>{
        if(item.date === date){
          item.times.push(scheduleTimeInfo)
        }
      })
      handleSetDateList([...dateList])
    }
    
  },[scheduleTimeInfo])

  useEffect(()=>{
    console.log(dateList)
  },[dateList])


  return (
    <div className="detail-schedule-list-container">
      {
        dateList.map((item,index)=>(
          <ScheduleDateItem key={index} index={index} item={item}/>

        ))
      }
    </div>
  );
};

export default DetailScheduleList;