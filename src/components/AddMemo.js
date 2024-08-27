import '../styles/AddMemo.css'

const AddMemo = (props) => {


  return(
    <>
      <div className="add-memo-container">
        <div className='add-memo-content-container'>
          <div className='memo-label-container'>
            <label htmlFor='memo'>여행 메모</label>
          </div>
          <textarea className='add-memo-content' name='memo'/>
        </div>
        <div className="add-memo-button-container">
          <input className="add-memo-button" type="button" value="메모 추가" onClick={()=>props.click()}/>
        </div>
      </div>
    </>
  )
}
export default AddMemo;