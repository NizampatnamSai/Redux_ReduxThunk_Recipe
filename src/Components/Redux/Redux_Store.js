import {configureStore} from '@reduxjs/toolkit'
import recipereducer from './Redux_Slice'
import reciepeReducer from './ReduxThunkSlice';



export const store=configureStore({
    reducer:{
     datas:recipereducer,
     statuss: reciepeReducer,
     reciepe: reciepeReducer,
     name:recipereducer,
     ID:recipereducer,
     ldata:recipereducer,
    }
})


