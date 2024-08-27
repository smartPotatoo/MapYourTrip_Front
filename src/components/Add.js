import { useEffect } from "react";
import '../styles/Add.css'
import { HiMiniXMark } from "react-icons/hi2";
import AddDetailSchedule from './AddDetailSchedule'
import AddMemo from "./AddMemo";
const Add = (props) => {
  //Add창을 종료시킵니다.
  const click = () => {
    props.onOff(false);
  }

  useEffect(()=>{
    if(props.btn == false){
        props.onOff(false);
    }
  },[])

  return(
    <>
      <div className="confirm-bg">
        <div className="confirm-container">
          <HiMiniXMark size={30} className='deleteIcon' onClick={click}/>
          {
            props.content === 'schedule' ? 
            <AddDetailSchedule click={click}/>
            :<AddMemo click={click}/>
          }
          
        </div>
      </div>
    </>
  )
}
export default Add;