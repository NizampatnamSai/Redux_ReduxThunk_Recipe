import React,{useMemo, useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {useDispatch} from 'react-redux'
import { deleteTodo } from './actions';


const TodoItems = () => {
    const myData = useSelector((state) => state.todreducer.tod);
    console.log(myData)
    let dispatch=useDispatch()

    // let [ide,setIde]=useState(0)

    // let hadledelete=useMemo((id)=>{
    //     // let ide=id
    //     alert(`u clicked ${id}` )
    // },[ide ])

    // let val=useMemo(()=>{
         
    //     return 
    // },[id])

    let hadledelete=(id)=>{
        alert(`u clicked ${id}` )

        dispatch(deleteTodo(id))
    }

  return (
    <div className='TodoItems'>
      
      <div className='TodoItems_inside'>

        {
            Array.isArray(myData) && myData?.map((items,indx)=>{
                return(
                <div key={Math.random()}
                    style={{display:'flex', backgroundColor:''}}
                    
                    >
                <div><li >{items.content}</li></div>
                <div >
                    <img  
                    // onClick={ ()=>hadledelete(items.id)  }
                    onClick={()=> hadledelete(items.id)
                        
                        //  ,setIde(items.id) 
                        }

                     style={{width:'50px',borderRadius:'50%'}}
                     src='https://ps.w.org/dx-delete-attached-media/assets/icon-256x256.png?rev=1729317'/>

                </div>
                </div>)
            })
        }

      </div>
    </div>
  )
}

export default TodoItems


