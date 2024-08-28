import React, { useEffect, useContext, useState } from 'react';
import '../styles/DetailScheduleList.css';
import ScheduleDateItem from './ScheduleDateItem'
import MapYourTripContext from '../provider/MapYourTripContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const DetailScheduleList = () => {
  const {handleSetDetailScheduleInfo,handleSetView,handleSetType, detailScheduleInfo, scheduleId, scheduleTimeInfo, date, handleSetDateList,dateList,type, scheduleMemoinfo,handleSetScheduleMemoinfo} = useContext(MapYourTripContext);
  
  const navigate = useNavigate();
  
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
    if(type === 'create' || type === 'modify'){
      handleSetView(false);
      console.log(detailScheduleInfo)
      if(detailScheduleInfo.nickname != undefined){
        axios.get(`http://localhost:8081/mypage`,{
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiMSIsInN1YiI6IjEiLCJqdGkiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcyNDgzNzY0MCwiZXhwIjoxNzI0OTI0MDQwfQ.L0e1FsrZX-q3WhXcMXUB4mxUPOYVLhHqRPUL2rbJNgQ`
          }
        })
        .then(res=>{
          console.log(res.data.body.nickname)
          console.log(detailScheduleInfo.nickname)
          if(res.data.body.nickname !== detailScheduleInfo.nickname){
            handleSetType('');
            navigate('/mypage')
            
          }
        }).catch(err=>{
          console.log(err);
        })
      }
      
    }else if(type === 'view'){
      handleSetView(true);
    }else{
      handleSetType('');
      navigate('/mypage')
    }
    
    
  },[type,detailScheduleInfo])
  

  useEffect(()=>{
    let startDate = detailScheduleInfo.startDate;
    let endDate = detailScheduleInfo.endDate
    if(detailScheduleInfo && detailScheduleInfo.length !== 0 && type === 'create'){
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
    if(scheduleTimeInfo.length !== 0){
      dateList.forEach((item)=>{
        if(item.date === date){
          item.times.push(scheduleTimeInfo)
          
          item.times.sort((a, b) => {
            const timeA = a.startTime.split(':').map(Number);
            const timeB = b.startTime.split(':').map(Number);
  
            return timeA[0] - timeB[0] || timeA[1] - timeB[1];
          });
        }
      })
      handleSetDateList([...dateList])
    }
    
  },[scheduleTimeInfo])

  useEffect(()=>{
    dateList.forEach((item)=>{
      if(item.date === date){
        item.content = scheduleMemoinfo;
      }
    })

    handleSetDateList([...dateList])
  },[scheduleMemoinfo])


  return (
    <div className="detail-schedule-list-container">
      { dateList && dateList.length > 0 ?
        dateList.map((item,index)=>(
          <ScheduleDateItem key={index} index={index} item={item}/>

        ))
        :<p>No schedules available</p>
      }
    </div>
  );
};

export default DetailScheduleList;