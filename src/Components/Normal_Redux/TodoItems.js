import React,{useEffect, useMemo, useState} from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import {useDispatch} from 'react-redux'
import { deleteTodo } from './actions';


const TodoItems = () => {
    const myData = useSelector((state) => state.todreducer.tod);
    // console.log(myData)
    let data=myData
    let dispatch=useDispatch()

    useEffect(()=>{
      // alert('useeffect changed')
      data=myData

    },[myData])
    // console.log(myData)


    // let [ide,setIde]=useState(0)

    // let hadledelete=useMemo((id)=>{
    //     // let ide=id
    //     alert(`u clicked ${id}` )
    // },[ide ])

    // let val=useMemo(()=>{
         
    //     return 
    // },[id])

    let hadledelete=(id)=>{
        // alert(`u clicked ${id}` )

        dispatch(deleteTodo(id))
    }


    // // let check=[0,1,2,3,4,5,6,7,8,9]
    // //  let od=[]
    // //  let ev=[]
    // //  check.forEach((item,idx)=>{
    // //   if(idx%2===0)
    // //    return ev.push(item)
    // //   return od.push(item)
    // //  })

    // //  let result=[...od,...ev]
    // //  console.log(result)

    // // let a=[1,3,5,7,9]
    // // let b=[0,2,4,6,8]
    // // let c=[...a,...b]
    // // console.log(c)


    // let str='The Sai is eating grapes'
    // let result1=[]
    // let strarr=str.split(' ')
    // let delidx=0;
    // let vari=strarr[delidx];
    // console.log(vari)

    // strarr.splice(delidx,1)


    // strarr.map((item,indx)=>{
    //   result1.push(vari);
    //   let nrev=vari[(vari.length-1)]
    //   console.log(nrev)
    //   for(let i=0;i<(strarr.length-1);i++)
    //   {  console.log(i)
    //     console.log(strarr[i][0])
    //     if(nrev===strarr[i][0]){
    //       vari=strarr[i]
    //       strarr.splice(i,1)
    //       break
    //     }
    //   }
    // })
    // console.log(result1)




  return (
    <div className='TodoItems'>
      
      <div className='TodoItems_inside'>

        {
             Array.isArray(data) && data?.map((items,indx)=>{
                return(
                <div key={Math.random()}
                    style={{display:'flex', backgroundColor:''}}
                    
                    >
                <div><li >{items?.content}</li></div>
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


