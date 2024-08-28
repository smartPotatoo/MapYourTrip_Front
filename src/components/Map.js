import React from 'react';
import { Container as MapDiv, NaverMap, useNavermaps } from 'react-naver-maps';
import { NavermapsProvider } from 'react-naver-maps';
import {useParams} from "react-router"
import { useEffect, useState ,useContext} from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';

const Map = () => {
  const navermaps = useNavermaps();
  const [map,setMap] = useState(null);
  const {handleSetType, handleSetScheduleId, dateList,detailScheduleInfo} = useContext(MapYourTripContext);
  const [timeList,setTimeList] = useState([]);

  //path variable value
  const {type, id} = useParams();

  useEffect(()=>{
    handleSetType(type);
    handleSetScheduleId(id);
  },[])
useEffect(()=>{
},[detailScheduleInfo])
  useEffect(()=>{
    let list = [];
    if(dateList.length !==0){
      dateList.forEach((date,dIdx)=>{
        date.times.forEach((time)=>{
          time.date = date.date;
          list.push(time);
        })
      })
    }
    
    setTimeList(list);
  },[dateList])

  useEffect(()=>{
    if(timeList.length !== 0){
      timeList.forEach((item)=>{
        let marker = new navermaps.Marker({
          map: map,
          position: new navermaps.LatLng(item.y, item.x)
        });
        const year = item.date.substring(0, 4);
        const month = item.date.substring(4, 6);
        const day = item.date.substring(6, 8);
        let info = new navermaps.InfoWindow({
          content: [
              `<div class="map-marker-info" style='padding : 10px;'>`,
              `   <div style='border-bottom : 1px solid black; margin-bottom: 3px; font-weight: 600; font-size: 1.2rem;'>${item.name}</div>`,
              `   <div>${item.address}</div>`,
              `   <div>${year}년 ${month}월 ${day}일</div>`,
              `   <div>${item.startTime} ~ ${item.endTime}</div>`,
              `   <div></div>`,
              `</div>`
          ].join('')
        })
        navermaps.Event.addListener(marker, "click", function(e) {
          if (info.getMap()) {
              info.close();
          } else {
              info.open(map, marker);
          }
        });
      })
      map.updateBy(new navermaps.LatLng(timeList[0].y, timeList[0].x))

    }
  },[timeList, map, navermaps])


  return (
    <NaverMap
      ref={setMap}
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      defaultZoom={15}
    >
    </NaverMap>
  );
};

const MapComponent = () => {
  return (
    <MapDiv
      style={{
        width: '100%',
        height: '911px',
      }}
    >
      <Map />
    </MapDiv>
  );
};

const WrappedMap = () => {
  return (
    <NavermapsProvider ncpClientId={process.env.REACT_APP_NAVER_MAP_CLIENT_ID}>
      <MapComponent />
    </NavermapsProvider>
  );
};

export default WrappedMap;
