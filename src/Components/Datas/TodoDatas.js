import React, { useState } from 'react'
import { getrecipe, selectThunkRcipe } from '../Redux/ReduxThunkSlice'
import './TodoDatas.css'
import { useDispatch,useSelector } from 'react-redux'
import { namesadd, recidelete,recipeupdate } from '../Redux/Redux_Slice'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'


const TodoDatas = ({data}) => {
  let {id}=data;
  console.log(data.input)
    let [dis,setDis]=useState(false)
    let [inpdis,setinpdis]=useState(false)
    let [upinp,setUpinp]=useState(`${data.input}`)

    let dispatch=useDispatch()
    let selectrecipe=useSelector(selectThunkRcipe)
    // console.log(selectrecipe?.hits)

    let handleclick=()=>{
        // alert(`u clicken on ${data}!`)
        setDis(!dis)

    }


    let handlenoclk=()=>{
        // setDis(false)
    }

    // if( handleclick && true ){
    //     setDis(false)

    // }

    let handleSearch=()=>{
        // alert(`search ${data} `)
          // console.log(data)
          dispatch(
            getrecipe(data?.input)
          )
          setDis(false)
  setinpdis(!inpdis)
          
          dispatch(namesadd(
            data?.input
          ))
        
    }





let handledelete=()=>[
    // alert(`Are tou sure to delete ${data}`),
    dispatch(
        recidelete(data?.id)
    )
]



let handleupdate=()=>{
  setinpdis(!inpdis)

}

let handleChangeup=(e)=>{
  setUpinp(e.target.value)
}

let handleUpdateRedux=()=>{
  dispatch(recipeupdate({id,upinp}))
}
  return (

 

    <div className='TodoDatas'>
 
  

        


        <div className='tododatas'>
          <div className='tododatas_inside'>
           <div className='tododatas_main'>
            <div><p>{data?.input}</p></div>
            <div><button className='tododatas_main_btn' onBlur={handlenoclk} onClick={handleclick}> :</button></div>
           </div>
          {dis && <div className='tododatas_btns'>
            <button onClick={handleSearch}><Link to={`${data?.input}`} > Search {data?.input} Reciepe </Link></button>
            <button onClick={handledelete}>Delete {data?.input}</button>
            <button onClick={handleupdate}>Update</button>
           </div>}
           <div className='tododatas_update'>
           {inpdis && dis &&
                <input value={upinp}  onChange={handleChangeup}/> 
                }
           
           {inpdis &&dis && <button onClick={handleUpdateRedux}>Update</button>}
           </div>
          </div>
        </div>
  
    </div>
  )
}

export default TodoDatas
