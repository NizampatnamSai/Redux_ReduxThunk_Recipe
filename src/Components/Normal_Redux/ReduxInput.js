import React, { useEffect, useState } from 'react'
import { addTodo } from './actions'
import {useDispatch} from 'react-redux'
import TodoItems from './TodoItems'
import axios from 'axios'
import { useSelector } from 'react-redux/es/hooks/useSelector';
import TableData from '../TableData'


const ReduxInput = () => {
  let dispatch=useDispatch()
let [input,setInput]=useState('')
let handleadd=(e)=>{
     e.preventDefault()
        console.log(input)
        dispatch(
        addTodo(input))

        setInput('')

}


let [data,setData]=useState([])

useEffect(()=>{
// let reqobject=`Time Series (5min)`;

    axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo').then((data)=>{
      console.log(data)
      setData(data.data)
    }).catch((e=>e.message()))

},[])

console.log(data['Time Series (5min)'])
// let {a,b}=data;
// console.log(a,b)
// let ar='Nsaisas'
// console.log(ar[(ar.length-1)])
// BIXY4ENS3N9FPAH9 is key



// data=data.map(({
//   ['Meta Data']:mdata,
  
//   ['Time Series (5min)']: firstName,
//   ...rest
// }) => rest)

let getdata=()=>{
  let origdata=data['Time Series (5min)']
  // let d=origdata.c
  // setData(data.data)

  dispatch(
    addTodo(origdata))
}

// let ar=[]
const myData = useSelector((state) => state.todreducer.tod);
console.log(myData)
console.log(myData[0]?.content)
let ordata=(myData[0]?.content)
// ar.push(myData[0]?.content)
// console.log(ar.length)
// let arrayOfObj;
//  if(myData){
 let arrayOfObj  ;
 if(myData[0]?.content){
 arrayOfObj= Object.entries(ordata)}
// console.log

//  map((e) => ( { [e[0]]: e[1] } ));

//  }
console.log(arrayOfObj)
// console.log(arrayOfObj?.length)


  return (
    <div>
      <div>
        <form>
            <input placeholder='Enter the Reciepe here..' value={input} name='input'
            onChange={(e)=>{
                setInput(e.target.value)
            }}/>
          {
            input &&<button onClick={handleadd}>Add</button>
          }  
            </form>
          <button onClick={getdata}>get data</button>
            <div>
              {/* <TodoItems/> */}
              {/* {Array.isArray(myData) && myData?.map((tdata,indx)=>{
                return(
                  <div key={Math.random()}>
              <TableData/>

                    </div>
                )
              })} */}

              {/* {Object.keys()} */}
              <table>
        <th>
            <td>DateTime</td>
            <td>Open</td>
            <td>High</td>
            <td>Low</td>
            <td>CLose</td>
            <td>Volume</td>
        </th>
        </table>

              {arrayOfObj?.map((data,indx)=>{
                return(
                  <div key={Math.random()}>
              <TableData date={data[0]}
              info={data[1]}/>


                    </div>
                )
              })}
              
            </div>
      </div>
    </div>
  )
}

export default ReduxInput
