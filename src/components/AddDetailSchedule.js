
import '../styles/AddDetailSchedule.css'
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';
import { useDaumPostcodePopup } from "react-daum-postcode";
const AddDetailSchedule = (props) => {
  const [addressInfo, setAddressInfo] = useState({
    startTime:'',
    endTime:'',
    name:'',
    address:'',
    x:'',
    y:''
  });

  const [confirm, setConfirm] = useState(true);

  const {handleSetScheduleTimeInfo} = useContext(MapYourTripContext);
  const [address,setAddress] = useState('');
  const open = useDaumPostcodePopup("https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
  
  const selectAddress = (e) => {
    open({ onComplete: handleComplete });
  }

  const handleComplete = (data) =>{
    console.log(data)
    axios.get((`/map-geocode/v2/geocode?query=${data.address}`),{
      headers:{
        "X-NCP-APIGW-API-KEY-ID":process.env.REACT_APP_NAVER_MAP_CLIENT_ID,
        "X-NCP-APIGW-API-KEY":process.env.REACT_APP_NAVER_MAP_API_KEY
      }
    }).then(res=>{
      console.log(res)
      setAddressInfo({ ...addressInfo,
        name: data.buildingName !== '' ? data.buildingName : data.address, 
        address: data.address,
        x: res.data.addresses[0].x,
        y: res.data.addresses[0].y
      })
    }).catch(err=>{
      console.log(err);
    })
  }
  const click = () =>{
    handleSetScheduleTimeInfo(addressInfo);

    props.click()
  }


  const handleSetAddress=(e)=>{
    setAddress(e.target.value);
  }

  const handleSetStartTime=(e)=>{
    setAddressInfo({...addressInfo,startTime : e.target.value})
  }

  const handleSetEndTime=(e)=>{
    setAddressInfo({...addressInfo,endTime : e.target.value})
  }

  useEffect(()=>{
    console.log(addressInfo)
    if(addressInfo.startTime !== ''&& addressInfo.endTime !== ''&& addressInfo.name !== ''&& addressInfo.x !== ''&& addressInfo.y !==''){
      setConfirm(false);
    }else{
      setConfirm(true);
    }
  },[addressInfo])
  return(
    <>
      <div className="add-detail-schedule-container">
        <div className="add-detail-schedule-content-container">
          <div className="content-container">
            <label htmlFor='palce-name' className="content-name">여행 장소</label>
            <input type="text" name='palce-name' className='palce-name' readOnly value={addressInfo.name}/>
            <IoIosSearch size={25} className="searchIcon" onClick={()=>selectAddress()}/>
          </div>
          <div className="content-container">
            <label htmlFor="start-time" className="content-name">시작 시간</label>
            <input type="text" name='start-time' className='time' onChange={handleSetStartTime}/>
          </div>
          <div className="content-container">
            <label htmlFor="end-time" className="content-name">종료 시간</label>
            <input type="text" name='end-time' className='time' onChange={handleSetEndTime}/>
          </div>
        </div>
        <div className="add-detail-schedule-button-container">
          <input className="add-detail-schedule-button" disabled={confirm} type="button" value="장소 추가" onClick={()=>click()}/>
        </div>
      </div>
          

    </>
  )
}
export default AddDetailSchedule;