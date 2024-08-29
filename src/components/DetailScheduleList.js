import React, { useEffect, useContext, useState } from 'react';
import '../styles/DetailScheduleList.css';
import ScheduleDateItem from './ScheduleDateItem'
import MapYourTripContext from '../provider/MapYourTripContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
const DetailScheduleList = () => {
  const {handleSetDetailScheduleInfo,handleSetView, detailScheduleInfo, scheduleId, scheduleTimeInfo, date, handleSetDateList,dateList,type, scheduleMemoinfo,handleSetScheduleMemoinfo} = useContext(MapYourTripContext);
  const navigate = useNavigate();
  const location = useLocation();
  const token = sessionStorage.getItem('token'); 
  
  const getSchedule = () =>{
    axios.get((`${process.env.REACT_APP_API_URL}/open-api/schedule/${scheduleId}/detail`))
    .then(res=>{
      handleSetDetailScheduleInfo(res.data.body)
    }).catch(err=>{
      console.log(err);
    })
    
    }
  useEffect(()=>{
    getSchedule();
  },[scheduleId])


  useEffect(()=>{
    if(type === 'create' || type === 'modify'){
      handleSetView(false);
      if(detailScheduleInfo.nickname != undefined){
        axios.get(`${process.env.REACT_APP_API_URL}/mypage`,{
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(res=>{
          if(res.data.body.nickname !== detailScheduleInfo.nickname){
            navigate('/mypage')
            
          }
        }).catch(err=>{
          console.log(err);
        })
      }
      
    }else if(type === 'view'){
      handleSetView(true);
    }else{
      navigate('/mypage')
    }
    
    
  },[type,detailScheduleInfo])
  

  useEffect(()=>{
    let startDate = detailScheduleInfo.startDate;
    let endDate = detailScheduleInfo.endDate
    if(detailScheduleInfo && detailScheduleInfo.length !== 0 && detailScheduleInfo.schedulesDateList.length === 0){
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