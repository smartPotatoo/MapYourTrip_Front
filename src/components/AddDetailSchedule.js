
import '../styles/AddDetailSchedule.css'
import { IoIosSearch } from "react-icons/io";
const AddDetailSchedule = (props) => {


  return(
    <>
      <div className="add-detail-schedule-container">
        <div className="add-detail-schedule-content-container">
          <div className="content-container">
            <label htmlFor='palce-name' className="content-name">여행 장소</label>
            <input type="text" name='palce-name' className='palce-name'/>
            <IoIosSearch size={25} className="searchIcon" />

          </div>
          <div className="content-container">
            <label htmlFor="start-time" className="content-name">시작 시간</label>
            <input type="text" name='start-time' className='time'/>
          </div>
          <div className="content-container">
            <label htmlFor="end-time" className="content-name">종료 시간</label>
            <input type="text" name='end-time' className='time'/>
          </div>
        </div>
        <div className="add-detail-schedule-button-container">
          <input className="add-detail-schedule-button" type="button" value="장소 추가" onClick={()=>props.click()}/>
        </div>
      </div>
          

    </>
  )
}
export default AddDetailSchedule;