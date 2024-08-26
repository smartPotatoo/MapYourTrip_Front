import { useEffect } from "react";
import '../styles/Confirm.css'
import { HiMiniXMark } from "react-icons/hi2";
import AddDetailSchedule from './AddDetailSchedule'
const Confirm = (props) => {
  const click = () => {

    props.onOff(false);
  }

  useEffect(()=>{
    if(props.btn == false){
      setTimeout(() => {
        props.onOff(false);
      }, 3000);
    }
  },[])

  return(
    <>
      <div className="confirm-bg">
        <div className="confirm-container">
          <HiMiniXMark size={30} className='deleteIcon' onClick={click}/>
          <AddDetailSchedule click={click}/>
        </div>
      </div>
    </>
  )
}
export default Confirm;