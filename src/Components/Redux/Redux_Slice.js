import { createSlice } from "@reduxjs/toolkit";
let r=[];
export const RecipeSlice=createSlice({
    name:'recipe',
    initialState:{
        data:[],
        names:''
    },

    reducers:{
        recipeadd:(state,action)=>{
            state.data.push(action.payload);
        },
        recidelete:(state,action)=>{
        //    r= state.data.map((a,b)=>{
        //     console.log(a)
        //     console.log(action.payload)
        //     return (a!==action.payload,
        //     console.log(a))
           
         r=[...state.data]
        //  console.log(r)

        
        // r.map((val,indx)=>{
        // //  console.log(val)

        //     if(action.payload===val){
        //         state.data.splice(indx,1)
        //     }
        // })


        
      let nr=  r.filter((val,inx)=>{
            
            return val?.id!==action.payload
        })

        state.data=nr;
        }

       
        
        ,
        recipeupdate:(state,action)=>{
   let r=[...state.data]
       r.map((val,ind)=>{
        if(val.id===action.payload.id){
            val.input=action.payload.upinp
        }
       })
       state.data=r;
        },
        namesadd:(state,action)=>{
            state.names=action.payload
        }
    }

})

export const {recipeadd,namesadd,recidelete,recipeupdate}=RecipeSlice.actions;

export const Selectrecipe=(state)=>state.datas.data;
export const SelectName=(state)=>state.name.names

export default RecipeSlice.reducer