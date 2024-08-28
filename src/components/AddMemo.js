import '../styles/AddMemo.css'
import { useEffect, useContext, useState } from 'react';
import MapYourTripContext from '../provider/MapYourTripContext';
const AddMemo = (props) => {
  const {handleSetScheduleMemoinfo, scheduleMemoinfo} = useContext(MapYourTripContext);
  const [memo,setMemo] = useState('')

  useEffect(()=>{
    console.log(scheduleMemoinfo)

    setMemo(scheduleMemoinfo);
  },[scheduleMemoinfo])

  const handleSetMemo = (e) =>{
    setMemo(e.target.value);
  }
  const click = () =>{
    handleSetScheduleMemoinfo(memo);
    props.click()
  }

  
  return(
    <>
      <div className="add-memo-container">
        <div className='add-memo-content-container'>
          <div className='memo-label-container'>
            <label htmlFor='memo'>여행 메모</label>
          </div>
          <textarea className='add-memo-content' name='memo' value={memo} onChange={(e)=>handleSetMemo(e)}/>
        </div>
        <div className="add-memo-button-container">
          <input className="add-memo-button" type="button" value="메모 추가" onClick={()=>click()}/>
        </div>
      </div>
    </>
  )
}
export default AddMemo;