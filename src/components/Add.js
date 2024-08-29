import { useEffect } from "react";
import '../styles/Add.css'
import { HiMiniXMark } from "react-icons/hi2";
import AddDetailSchedule from './AddDetailSchedule'
import AddMemo from "./AddMemo";
import AddSchedule from "./AddSchedule";
const Add = (props) => {
  //Add창을 종료시킵니다.
  const click = () => {
    props.onOff(false);
  }

  useEffect(()=>{
    if(props.btn === false){
        props.onOff(false);
    }
  },[])
  return(
    <>
      <div className="confirm-bg">
        <div className="confirm-container">
          <HiMiniXMark size={30} className='deleteIcon' onClick={click}/>
          {
            props.content === 'date' ? 
            <AddDetailSchedule click={click}/> //장소 추가
            :props.content === 'schedule' ?
             <AddSchedule type={props.type} scheduleId={props.scheduleId} click={click}/> // 일정 추가 || 일정 수정
            : <AddMemo click={click}/> //메모 추가
          }
          
        </div>
      </div>
    </>
  )
}
export default Add;