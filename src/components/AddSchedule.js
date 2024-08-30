import '../styles/AddSchedule.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddSchedule = (props) => {
  const navigate = useNavigate();
  const [scheduleInfo, setScheduleInfo] = useState({
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
      axios.get(`${process.env.REACT_APP_API_URL}/open-api/schedule/${props.scheduleId}/detail`)
      .then(res=>{
        setScheduleInfo({
          tripName: res.data.body.tripName,
          startDate: convertToDateInputFormat(res.data.body.startDate),
          address: res.data.body.address,
          endDate: convertToDateInputFormat(res.data.body.endDate),
        });
        setConfirm(true);
      }).catch(err=>{
        console.log(err);
      })
    }
  }, [props.scheduleId, props.type]);

  const formatDate = (date) => {
    const d = new Date(date);
    const yy = String(d.getFullYear()).slice(-2);
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yy}${mm}${dd}`;
  }

  const convertToDateInputFormat = (date) => {
    // YYMMDD 형식의 문자열을 YYYY-MM-DD로 변환
    const yy = date.slice(0, 2);
    const mm = date.slice(2, 4);
    const dd = date.slice(4, 6);
    return `20${yy}-${mm}-${dd}`;
  }

  const put = ()=>{
    const formattedScheduleInfo = {
      ...scheduleInfo,
      startDate: formatDate(scheduleInfo.startDate),
      endDate: formatDate(scheduleInfo.endDate)
    };

    axios.put(`${process.env.REACT_APP_API_URL}/schedule/${props.scheduleId}`,
      formattedScheduleInfo,{
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
    const formattedScheduleInfo = {
      ...scheduleInfo,
      startDate: formatDate(scheduleInfo.startDate),
      endDate: formatDate(scheduleInfo.endDate)
    };

    axios.post(`${process.env.REACT_APP_API_URL}/schedule`,
      formattedScheduleInfo,{
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

  const handleSetStartDate = (e) => {
    setScheduleInfo({...scheduleInfo, startDate : e.target.value});
  }

  const handleSetEndDate = (e) => {
    setScheduleInfo({...scheduleInfo, endDate : e.target.value});
  }
  
  const handleSetAddress = (e) => {
    setScheduleInfo({...scheduleInfo, address : e.target.value});
  }

  const handleSetTripName = (e) => {
    setScheduleInfo({...scheduleInfo, tripName : e.target.value});
  }

  useEffect(()=>{
    if(scheduleInfo.tripName !== '' && scheduleInfo.address !== '' && scheduleInfo.startDate !== '' && scheduleInfo.endDate !== ''){
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  }, [scheduleInfo]);

  return(
    <>
      <div className="add-schedule-container">
        <div className="add-schedule-content-container">
          <div className="content-container">
            <label htmlFor='start-date' className="content-name">출발 날짜</label>
            <input type="date" name='start-date' className='date' value={scheduleInfo.startDate} onChange={handleSetStartDate}/>
          </div>
          <div className="content-container">
            <label htmlFor="end-date" className="content-name">도착 날짜</label>
            <input type="date" name='end-date' className='date' value={scheduleInfo.endDate} onChange={handleSetEndDate}/>
          </div>
          <div className="content-container">
            <label htmlFor="place" className="content-name">국내 도시</label>
            <input type="text" name='place' className='place' value={scheduleInfo.address} onChange={handleSetAddress}/>
          </div>
          <div className="content-container">
            <label htmlFor='trip-name' className="content-name">여행 이름</label>
            <input type="text" name='trip-name' className='trip-name' value={scheduleInfo.tripName} onChange={handleSetTripName}/>
          </div>
        </div>
        <div className="add-schedule-button-container">
          {
            props.type === 'create' ?
            <input className="add-schedule-button" disabled={confirm} type="button" value="일정 추가" onClick={post}/>
            : <input className="add-schedule-button" disabled={confirm} type="button" value="일정 수정" onClick={put}/>
          }
        </div>
      </div>
    </>
  )
}

export default AddSchedule;
