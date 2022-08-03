import React, { useState } from 'react'
import { addTodo } from './actions'
import {useDispatch} from 'react-redux'
import TodoItems from './TodoItems'

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

// let ar='Nsaisas'
// console.log(ar[(ar.length-1)])

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

            <div>
              <TodoItems/>
            </div>
      </div>
    </div>
  )
}

export default ReduxInput
