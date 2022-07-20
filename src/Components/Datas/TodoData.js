import React from 'react'
import { Selectrecipe } from '../Redux/Redux_Slice'
import { useSelector } from 'react-redux/es/exports'
import './TodoData.css'
import TodoDatas from './TodoDatas'

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
      
    </div>
  )
}

export default TodoData
