
import '../styles/AddSchedule.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddSchedule = (props) => {
  const navigate = useNavigate();
  const [scheudleInfo, setScheudleInfo] = useState({
    tripName:'',
    startDate:'',
    address:'',
    endDate:'',
  });

  const [confirm, setConfirm] = useState(true);
  const token = sessionStorage.getItem('token'); 
  
  const click = () =>{
    axios.post(`${process.env.REACT_APP_API_URL}/schedule`,
      scheudleInfo,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res=>{
      navigate(`/schedule/create/${res.data.body.id}`);
    }).catch(err=>{
      console.log(err);
    })
    props.click()
  }

  console.log(scheudleInfo)

  const handleSetStartDate=(e)=>{
    setScheudleInfo({...scheudleInfo,startDate : e.target.value})
  }

  const handleSetEndtDate=(e)=>{
    setScheudleInfo({...scheudleInfo,endDate : e.target.value})
  }
  const handleSetAddress=(e)=>{
    setScheudleInfo({...scheudleInfo,address : e.target.value})
  }
  const handleSetTripName=(e)=>{
    setScheudleInfo({...scheudleInfo,tripName : e.target.value})
  }



  useEffect(()=>{
    if(scheudleInfo.tripName !== ''&& scheudleInfo.address !== ''&& scheudleInfo.startDate !== ''&& scheudleInfo.endDate !==''){
      setConfirm(false);
    }else{
      setConfirm(true);
    }
  },[scheudleInfo])
  return(
    <>
      <div className="add-schedule-container">
        <div className="add-schedule-content-container">
          <div className="content-container">
            <label htmlFor='start-date' className="content-name">출발 날짜</label>
            <input type="text" name='start-date' className='date' onChange={handleSetStartDate}/>
          </div>
          <div className="content-container">
            <label htmlFor="end-date" className="content-name">도착 날짜</label>
            <input type="text" name='end-date' className='date' onChange={handleSetEndtDate}/>
          </div>
          <div className="content-container">
            <label htmlFor="place" className="content-name">국내 도시</label>
            <input type="text" name='place' className='place' onChange={handleSetAddress}/>
          </div>
          <div className="content-container">
            <label htmlFor='trip-name' className="content-name">여행 이름</label>
            <input type="text" name='trip-name' className='trip-name' onChange={handleSetTripName}/>
          </div>
        </div>
        <div className="add-schedule-button-container">
          <input className="add-schedule-button" disabled={confirm} type="button" value="일정 추가" onClick={()=>click()}/>
        </div>
      </div>
          

    </>
  )
}
export default AddSchedule;