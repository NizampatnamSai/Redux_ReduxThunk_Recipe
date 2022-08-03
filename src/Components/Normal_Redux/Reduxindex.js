import { combineReducers,createStore } from "redux";
import todoreducer from "./ReduxReducer";


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers= combineReducers({ 
    todreducer:todoreducer });


    const store=createStore(reducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    export default store
