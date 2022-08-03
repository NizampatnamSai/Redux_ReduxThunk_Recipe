import React, { useEffect, useState } from 'react'
import './LocalStorageData.css'
import { useDispatch } from 'react-redux'
import { deletelocal } from '../Redux/Redux_Slice'

const LocalStorageData = ({Input,Id}) => {
  let [btndis,setBtnDIs]=useState(false)
  let [btnupdate,setBtnUpdate]=useState(false)
  let [update,setUpdate]=useState(`${Input}`)
  let dispatch=useDispatch()

  let handlebtn=()=>{
      setBtnDIs(!btndis)
  }
  let handleUpdate=()=>{
    setBtnUpdate(!btnupdate)

  }

  let handleUpdateInput=(e)=>{
    setUpdate(e.target.value)

  }

  let newdata;
  let handledelete=()=>{

  let localdata=JSON.parse(localStorage.getItem('todos'))
  newdata=[...localdata]


  localdata?.map((item,indx)=>{
   if(Id===item.id){
    newdata.splice(indx,1)


   }
  })
  localStorage.setItem('todos',JSON.stringify(newdata))
  dispatch(deletelocal(Id))
}

// useEffect(()=>{

// },[newdata])


  return (
    <div className='LocalStorageData'>
      <div className='LocalStorageData_inside'>
      <div>{Input}</div>
      <div><button className='LocalStorageData_btn' onClick={handlebtn}>:</button></div></div>
      
       { btndis && <div className='LocalStorageData_btndis'>
         {/* <input /> */}
         <button>search</button>
         <button onClick={handledelete}>Delete</button>
         <button onClick={handleUpdate}>Update</button>
      </div>}
    { btnupdate && btndis && <div className='LocalStorageData_updates'>
        <input value={update} onChange={handleUpdateInput}/>
        <button>Update</button>
      </div>}
      
    </div>
  )
}

export default LocalStorageData
