import { act } from "react-dom/test-utils";
import { Add_ToDO,Delete_Todo } from "./actionTypes";

const InitialState={
    tod:[],
    id:''
}

  const todoreducer=(state=InitialState,action)=>{
 
     switch( action.type){
       
        case Add_ToDO:
            return{
                ...state,
                tod:[
                    ...state.tod,
                   {
                        // id:action.payload.id,
                        content:action.payload.content
                    }
                    
                ]
            }
             
            // case Delete_Todo:
            //     let deleteid=action.payload;

            //  let   data=state.tod;
            //     console.log(data)
            //     console.log(deleteid)

            //     // data.filter((item,indx)=>{
            //     //     // if(item.id===deleteid)
            //     // console.log(item)

            //     //     return item.id!==deleteid
                
            //     // })

            //   let newtod=  data.filter((item,indx)=>{
            //         // console.log((`item1`,item.id,'id',deleteid))
            //         // console.log('ite,')
            //         // if(item.id===deleteid.id){
            //         //     alert(item.id)
            //         //     data.splice(indx,1)
            //         // }

            //         return item.id!==action.payload.id
            //     })
            //     console.log(data)
               
            //     // state.tod=data
                
            //     return{
            //         ...state,
            //         id:action.payload.id,
            //         tod:newtod
            //         // tod:{
            //         //     ...state.tod,
            //         //     tod:newtod
            //         // }



                    
            //     }

            //     // return Object.assign({}, state, {
            //     //     todo: state.todos.filter((todo) => {
            //     //       return todo.id !== action.payload.id
            //     //     })
            //     //   })

            case Delete_Todo:
                let newdata=state.tod;
        let newfilter= newdata.filter((item,indx)=>{
                  return action.payload.id!==item.id
                  
                })
                console.log(newfilter)

                return {
                    ...state,
                    id:action.payload.id,
                    tod:newfilter
                }

            default :
            return state;

     }
}

export default todoreducer