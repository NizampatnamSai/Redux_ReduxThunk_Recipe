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
                        id:action.payload.id,
                        content:action.payload.content
                    }
                    
                ]
            }
             
            case Delete_Todo:
                return{
                    ...state,
                    id:action.payload
                }

            default :
            return state;

     }
}

export default todoreducer