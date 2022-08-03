import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deletelocal, localdata, SelectId, SelectLocalData } from '../Redux/Redux_Slice'
import './LocalStorage.css'
import LocalStorageData from './LocalStorageData'

const LocalStorage = () => {

//     let [input,setInput]=useState('')
//     let [btndis,setBtndis]=useState(false)
//     let [num,setnum]=useState(1)  
//     let handleInput=(e)=>{
//         setInput(e.target.value)
//     }  
// // let nar=['dfs','se']
// // let ansar=[];
// let [ansar,setAns]=useState([])
// let [ar,setar]=useState([JSON.parse(localStorage.getItem('names'))])
//     let handleadd=()=>{
//         input.trim()
//         setnum(num+1)
//     //    newn=num++;
//     // nar.push(input)
//     setar([...ar,{input,num}])
// localStorage.names=JSON.stringify(ar)
  
       
//             // localStorage.setItem(`val ${num}`, JSON.stringify({input:input,id:num}))
//             // localStorage.setItem(num,input)
        
//         // console.log(localStorage.getItem('val'))
//         // localStorage.setItem()
// //   localStorage.val.push(input)

//          setInput('')
//        let  newansar=JSON.parse(localStorage.getItem('names'))
//        setAns(newansar)

//     }
// console.log(ansar)
// console.log(localStorage.getItem('val'))


//     if(input!=='' && input!==undefined && input!==null){
//         setBtndis(true)
//     }



//     let localdata;
//   let [local,setLocal]=useState(localdata)

//     useEffect(()=>{
//         localdata=localStorage.getItem('users')
//             setLocal(localdata)
//   console.log(localdata)
//   if(Array.isArray(localdata))
// {
//     console.log('yes')
// }

//     })
//   console.log(local)




// console.log(localStorage.val)
// console.log(input.trim())
// let val=localStorage;
// let len=val.length;
// console.log(len);


// localStorage.val1




// let [input,setInput]=useState('')
// let [local,setLocal]=useState([])
// let [newlocal,setNewlocal]=useState([JSON.parse(localStorage.getItem('names'))])
// let [id,setId]=useState(0)
// useEffect(()=>{
//   // setLocal()
//   setNewlocal([...newlocal,local])

// },[])


 
// let handleInput=(e)=>{
//   setInput(e.target.value)
// }


// let handleadd=()=>{
//   setId(id+1)
//   // localStorage.setItem('names',JSON.stringify({input,id}))
//   setNewlocal([...newlocal,{input,id}])
//   localStorage.names=JSON.stringify(newlocal)

//   setInput('')


// }



let Selectid=useSelector(SelectId)
let dispatch=useDispatch()
let selectLocldata=useSelector(SelectLocalData)
let dellocal=useSelector(deletelocal)

let [data,setData]=useState(()=>{
  let localdatal=localStorage.getItem('todos')
    

  if(localdatal){
    dispatch(localdata(
      JSON.parse( localdatal)
    ))
    return JSON.parse(localdatal)
  }
  else {
    return [];
  }
})


useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(data))
    dispatch(localdata(
       data
    ))
},[data])


// useEffect(()=>{
//   localStorage.setItem('todos',JSON.stringify(data))
// },[Selectid])


let [input,setInput]=useState('')

let handleInput=(e)=>{
  setInput(e.target.value)
}

let handleadd=()=>{

  setData([
    ...data,
   { input:input,
    id:Math.random()}]

  )
  setInput('')


}


useEffect(()=>{
  localStorage.setItem('todos',JSON.stringify(selectLocldata))
  
  

},[dellocal])

  return (
    <div className="LocalStorage">
        <div className='LocalStorage_Inside'>
        <div><small>LocalStorage</small> </div>
        <div className='LocalStorage_main'>
         <div>   <input value={input} onChange={handleInput} placeholder='Type something here ...'/></div>
         <div>
          { (input.trim()) && <button onClick={handleadd}
           className='LocalStorage_btn_add'>Add </button>}
         </div>
        </div>

      {/* {
        Array.isArray(local) &&  local?.map((item,indx)=>{
            return(
                <div key={Math.random()}>
                    {item.email}

                    </div>
            )
        })
      } */}


      {/* {val?.map((item)=>{
        return(
            <div>
                {item?.val}
                </div>
        )
      })} */}

     

        </div>
        {/* <div className='LocalStorage_data'>
        {ansar?.map((item)=>{
        return(
            <div>
                {item.input}uyy
                </div>
        )
      })}</div> */}



      {
        <div className='LocalStorage_data'>
          {selectLocldata?.map((item)=>{
            return(
              <div key={Math.random()}>
                <LocalStorageData Input={item.input} Id={item.id}/>
                {/* {item?.input} {item?.id} */}
              </div>
            )
          })}
        </div>
      }
        
    </div>
  )
}

export default LocalStorage
