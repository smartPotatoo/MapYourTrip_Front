import '../styles/AddScheduleTitle.css'
import { useContext, useEffect } from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddScheduleTitle = (props) => {
  const navigate = useNavigate();
  const {detailScheduleInfo,dateList,view,scheduleId,type,handleSetType} = useContext(MapYourTripContext);

  const click = () =>{
    if(!view){
      if(type === 'create'){
        add();
      }else if(type === 'modify'){
        put();
      }
    }

  }

  const add = () =>{
    axios.post(`http://localhost:8081/schedule/${scheduleId}/detail`,{
      schedulesDateList:dateList
    },{
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiMSIsInN1YiI6IjEiLCJqdGkiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcyNDgzNzY0MCwiZXhwIjoxNzI0OTI0MDQwfQ.L0e1FsrZX-q3WhXcMXUB4mxUPOYVLhHqRPUL2rbJNgQ`
    }
    })
    .then(res=>{
      handleSetType('');
      navigate('/mypage');
    }).catch(err=>{
      console.log(err);
    })
  }

  const put = () =>{
    axios.put(`http://localhost:8081/schedule/${scheduleId}/detail`,{
      schedulesDateList:dateList
    },{
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiMSIsInN1YiI6IjEiLCJqdGkiOiIxIiwicm9sZSI6IlJPTEVfVVNFUiIsImlhdCI6MTcyNDgzNzY0MCwiZXhwIjoxNzI0OTI0MDQwfQ.L0e1FsrZX-q3WhXcMXUB4mxUPOYVLhHqRPUL2rbJNgQ`
      }
    })
    .then(res=>{
      handleSetType('');
      navigate('/mypage');
    }).catch(err=>{
      console.log(err);
    })
  }

  return(
    <>
      <div className="add-schedule-title-container">
        <div className="add-schedule-title-input-container">
          <label htmlFor="title">
            여행 이름
          </label>
          <input  type="text" className="add-schedule-title-input" readOnly name="title" value={detailScheduleInfo.tripName}/>
        </div>
        <div className="add-schedule-title-button-container">
          {
            !view ? 
              <input  type="button" className="add-schedule-title-button" value={"completion"} onClick={click}/>
            :null
          }
        </div>
      </div>
    </>
  )
}
export default AddScheduleTitle;