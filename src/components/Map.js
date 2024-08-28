import React from 'react';
import { Container as MapDiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';
import { NavermapsProvider } from 'react-naver-maps';
import {useParams} from "react-router"
import { useEffect, useState ,useContext} from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';

const Map = () => {
  const navermaps = useNavermaps();
  const [map,setMap] = useState(null);
  const {handleSetType, handleSetScheduleId, dateList,detailScheduleInfo} = useContext(MapYourTripContext);
  const [timeList,setTimeList] = useState([]);
  const [markerList, setMarkerList] = useState([]);

  //path variable value
  const {type, id} = useParams();

  useEffect(()=>{
    handleSetType(type);
    handleSetScheduleId(id);
  },[])
useEffect(()=>{
 console.log(detailScheduleInfo)
},[detailScheduleInfo])
  useEffect(()=>{
    console.log(dateList)
    let list = [];
    if(dateList.length !==0){
      dateList.forEach((date,dIdx)=>{
        date.times.forEach((time)=>{
          time.dIdx = dIdx;
          list.push(time);
        })
      })
    }
    
    setTimeList(list);
  },[dateList])

  useEffect(()=>{
    if(timeList.length !== 0){

      map.updateBy(new navermaps.LatLng(timeList[0].y, timeList[0].x))
    

    }
  },[timeList, map, navermaps])

  return (
    <NaverMap
      ref={setMap}
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
      defaultZoom={15}
    >
      {
        timeList.map((item,index)=>(
          <Marker key={index}
            position={new navermaps.LatLng(item.y, item.x)}
          />
          
        ))
      }

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
