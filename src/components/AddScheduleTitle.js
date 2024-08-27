import '../styles/AddScheduleTitle.css'
const AddScheduleTitle = (props) => {


  return(
    <>
      <div className="add-schedule-title-container">
        <div className="add-schedule-title-input-container">
          <label htmlFor="title">
            여행 이름
          </label>
          <input type="text" className="add-schedule-title-input" name="title"/>
        </div>
        <div className="add-schedule-title-button-container">
          <input type="button" className="add-schedule-title-button" value={"completion"}/>
        </div>
      </div>
    </>
  )
}
export default AddScheduleTitle;