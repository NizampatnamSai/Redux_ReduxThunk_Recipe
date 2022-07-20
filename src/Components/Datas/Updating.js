import React, { useState } from 'react'
import './Updating.css'
import { useDispatch } from 'react-redux/es/exports'
import { recipeupdate } from '../Redux/Redux_Slice'

const Updating = ({data}) => {
    let {id}=data;
let dispatch=useDispatch()
let [inpdis,setinpdis]=useState(false)
let [inp,setinp]=useState(`${data.input}`)
    let handleupdate=()=>{
  setinpdis(!inpdis)
    }

    let handlechange=(e)=>{
   setinp(e.target.value)
    }

    let handleUpdate=()=>{
        dispatch(
            recipeupdate({inp,id})
        )
        
    }
  return (
    <div className='Updating'>
        <div className='Updating_inside'>
        <div>
      {data?.input}
      
     { inpdis && <input onChange={handlechange} value={inp}/>}
      </div>

      <div>
       <button onClick={handleupdate}>:</button>
       {inpdis && <button onClick={handleUpdate}>Update</button>}
      </div>
      </div>

    </div>
  )
}

export default Updating
