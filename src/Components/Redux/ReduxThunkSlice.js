import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
   const API_ID =`37c4cfeb`;

   export const getrecipe=createAsyncThunk('recipe/getrecipoe', async(data)=>{
    return fetch(`https://api.edamam.com/search?q=${data}&app_id=${API_ID}&app_key=${API_KEY}`).then((res)=>
    res.json()
    )
   } )


   export const RecipeThunkSlce= createSlice({
    name:'recipe',
    initialState:{
        recipeP:[],
        status:null,
    },

    reducers:{
        eraceRecipe:(state)=>{
            state.recipeP=null;
        },
    },

    extraReducers:{
     [getrecipe.pending]:(state)=>{
        state.status='loading'
     },

     [getrecipe.fulfilled]:(state,action)=>{
        state.status='success'
        state.recipeP=action.payload
     },

     [getrecipe.rejected]:(state)=>{
        state.status='failed'
     }
  

    }



   })


export const { eraceRecipe } = RecipeThunkSlce.actions;


export const selectThunkRcipe = (state) => state.reciepe.recipeP;
export const selectSTatus = (state) => state.statuss.status;


export default RecipeThunkSlce.reducer;
