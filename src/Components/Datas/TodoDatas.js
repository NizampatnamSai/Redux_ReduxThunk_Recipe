import React, { useState } from 'react'
import { getrecipe, selectThunkRcipe } from '../Redux/ReduxThunkSlice'
import './TodoDatas.css'
import { useDispatch,useSelector } from 'react-redux'
import { namesadd, recidelete } from '../Redux/Redux_Slice'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'


const TodoDatas = ({data}) => {
    let [dis,setDis]=useState(false)

    let dispatch=useDispatch()
    let selectrecipe=useSelector(selectThunkRcipe)
    console.log(selectrecipe?.hits)

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
          console.log(data)
          dispatch(
            getrecipe(data?.input)
          )
          setDis(false)
          dispatch(namesadd(
            data?.input
          ))
        
    }


    // let ar=[1,2,3,74]
    // ar.reduce((a,b)=>{
    //     console.log(a,b)
    // })



let handledelete=()=>[
    // alert(`Are tou sure to delete ${data}`),
    dispatch(
        recidelete(data?.id)
    )
]

  return (

 

    <div className='TodoDatas'>
        {/* { data?.map((item)=>{return(

        
      <ul key={Math.random()} className='todoData_ul'>
                    <li>{item}</li>
                    <button onClick={handleclick}>:</button>
                </ul>
                )})} */}

            <div className='TodoDatas_inside'>
                <div>  <p>{data?.input}</p></div>
                <div><button className='TodoDatas_inside_btn' onBlur={handlenoclk} onClick={handleclick}> :</button></div> </div> 


                {dis?<div className='TodoData_btn_inside'> <button className='TodoDatas_recipebtn' onClick={handleSearch}>
                    <Link to={`${data?.input}`} > Search {data?.input} Reciepe </Link>
                     </button>
                     <button  onClick={handledelete}
                      className='TodoDatas_recipedelete'>Delete {data?.input}</button>
                    </div> :null}
  
                
          {/* {selectrecipe? <div>
            {selectrecipe.hits?.map((item)=>{return(
                <div key={Math.random()} className='recipes'>
                  <div className='recipes_inside'>
                  <div> <h1>{item.recipe.label}</h1> </div>
                 <div>   <img src={item.recipe.image}  alt='recipe'/></div>
                  </div>
                </div>
            )

            })}
          </div>:null} */}
        
  
    </div>
  )
}

export default TodoDatas
