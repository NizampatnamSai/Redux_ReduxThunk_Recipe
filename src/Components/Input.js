import React, { useState } from 'react'
import './Input.css'
import {useDispatch} from 'react-redux'
import { recipeadd } from './Redux/Redux_Slice'
import TodoData from './Datas/TodoData'

let Input=()=>{

    let dispatch=useDispatch()
    let [input,setInput]=useState('')
    let val=0;
    let id;

    let inputOnchange=(e)=>{
        setInput(e.target.value)

    }
    let handlesubmit=(e)=>{
   e.preventDefault()
    console.log(input)
    if(input!=='' && input!==undefined && input!==null){
        id=++val;
   dispatch(recipeadd(input))}
//    input=''
setInput('')

    }

    
    console.log(input)
    return(
        <div className='Input'>
         <div className='Input_Inside'>
        <form className='Input_form'>
            <input value={input} onChange={inputOnchange} placeholder='write here...'  required/>
           {input?<button onClick={handlesubmit}>Add</button> : null} 
        </form>
         </div>

      <div className='todoData'>
      <TodoData/></div> 


        </div>

    )
}

export default Input