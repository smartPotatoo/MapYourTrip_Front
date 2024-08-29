
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
  console.log(props.scheduleId)

  const [confirm, setConfirm] = useState(true);
  const token = sessionStorage.getItem('token'); 
  
  useEffect(()=>{
    if(props.type === 'modify'){
      axios.get((`${process.env.REACT_APP_API_URL}/open-api/schedule/${props.scheduleId}/detail`))
      .then(res=>{
        setScheudleInfo({
          tripName: res.data.body.tripName,
          startDate: res.data.body.startDate,
          address: res.data.body.address,
          endDate: res.data.body.endDate,
        });
        setConfirm(true);
      }).catch(err=>{
        console.log(err);
      })
    }
  },{})

  const put = ()=>{
    axios.put(`${process.env.REACT_APP_API_URL}/schedule/${props.scheduleId}`,
      scheudleInfo,{
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res=>{
      navigate(`/schedule/modify/${props.scheduleId}`);
    }).catch(err=>{
      console.log(err);
    })
    props.click()
  }

  const post = () =>{
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
            <input type="text" name='start-date' className='date' value={scheudleInfo.startDate} onChange={handleSetStartDate}/>
          </div>
          <div className="content-container">
            <label htmlFor="end-date" className="content-name">도착 날짜</label>
            <input type="text" name='end-date' className='date' value={scheudleInfo.endDate} onChange={handleSetEndtDate}/>
          </div>
          <div className="content-container">
            <label htmlFor="place" className="content-name">국내 도시</label>
            <input type="text" name='place' className='place' value={scheudleInfo.address} onChange={handleSetAddress}/>
          </div>
          <div className="content-container">
            <label htmlFor='trip-name' className="content-name">여행 이름</label>
            <input type="text" name='trip-name' className='trip-name' value={scheudleInfo.tripName} onChange={handleSetTripName}/>
          </div>
        </div>
        <div className="add-schedule-button-container">
          {
            props.type === 'create' ?
            <input className="add-schedule-button" disabled={confirm} type="button" value="일정 추가" onClick={()=>post()}/>
            : <input className="add-schedule-button" disabled={confirm} type="button" value="일정 수정" onClick={()=>put()}/>
          }
        </div>
      </div>
          

    </>
  )
}
export default AddSchedule;