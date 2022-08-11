import { Add_ToDO,Delete_Todo } from "./actionTypes";

let idnum=0;

// Action creater function

export const addTodo=(content)=> { 
    console.log(content)
    return {
    type:Add_ToDO,
    payload:{
        // id:++idnum,
        content
    }}
}

export const deleteTodo=(id)=>{
    // alert(id)
    return{
    type:Delete_Todo,
    payload:{id}}

}