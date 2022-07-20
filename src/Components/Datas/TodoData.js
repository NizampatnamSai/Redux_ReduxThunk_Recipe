import React from 'react'
import { Selectrecipe } from '../Redux/Redux_Slice'
import { useSelector } from 'react-redux/es/exports'
import './TodoData.css'
import TodoDatas from './TodoDatas'
import Updating from './Updating'

const TodoData = () => {
    let selectrecipe=useSelector(Selectrecipe)
    // console.log(selectrecipe)


  return (
    <div className='todoData'>
        {selectrecipe?.map((item)=>{
            return(
                <ul key={Math.random()} className='todoData_ul'>
                    <li><TodoDatas data={item}/>   </li>
                   
                   
                </ul>
            )
        })}


{/* {selectrecipe?.map((item)=>{
            return(
                <ul key={Math.random()} className='todoData_ul'>
                   
                  <div className='todoData_ul_update'> <li><Updating data={item}/>   </li></div> 
                   
                </ul>
            )
        })} */}
      
    </div>
  )
}

export default TodoData
