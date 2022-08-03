import './App.css';
import TodoData from './Components/Datas/TodoData';
import Input from './Components/Input';
import {BrowserRouter as Router, Route, Link, Routes, useNavigate} from 'react-router-dom'
import { selectSTatus, selectThunkRcipe } from './Components/Redux/ReduxThunkSlice';
import {useSelector} from 'react-redux'
import { SelectName } from './Components/Redux/Redux_Slice';
import RecipesChild from './Components/Datas/RecipesChild';
import Spinner from 'react-spinkit'
import { useEffect } from 'react';
import LocalStorage from './Components/LocalStorage/LocalStorage';
import ReduxInput from './Components/Normal_Redux/ReduxInput';

function App() {

//   let selectrecipe=useSelector(selectThunkRcipe)

//   // let SelectNaeRespi=useSelector(SelectName)
//   // console.log(SelectNameRespi)
  
//   let selectStatus=useSelector(selectSTatus)
//   // const navigate = useNavigate()



// // console.log(window.location.href)
// // console.log(window.location.pathname)
// let path=window.location.pathname;
// let SelectNameRespi=useSelector(SelectName)
// const navigate = useNavigate()

 
// useEffect(()=>{
//   if(SelectNameRespi && SelectNameRespi!=='Chicken' && SelectNameRespi!=='Icecream' &&
//  SelectNameRespi!=='icecream' && SelectNameRespi!=='Chilli' && SelectNameRespi!=='chilli'
//  && SelectNameRespi!=='Chilli chicken' && SelectNameRespi!=='chilli chicken'
//   && SelectNameRespi!=='chicken' && SelectNameRespi!=='Ice' &&
//   SelectNameRespi!=='Gee' && SelectNameRespi!=='gee' && SelectNameRespi!=='ice'){
//   alert('Oops!! go back & search with proper name or Update it')
//   navigate("/")

// }


// },[path])


// // if('Chilli'=='Chilli'){
// //   console.log('true')
// // }

// // if(SelectNameRespi && SelectNameRespi!=='Chicken' && SelectNameRespi!=='Icecream' &&
// //  SelectNameRespi!=='icecream' && SelectNameRespi!=='chicken' && SelectNameRespi!=='Ice' && SelectNameRespi!=='ice'){
// //   alert('oops go back & search with proper name')
// // }

//   if (selectStatus==='loading') {

//     return (
//       <div className='loading_app'>
//         <div className='loading_spin'>
//           {/* <img src='https://edamam-product-images.s3.amazonaws.com/web-img/4d9/4d9084cbc170789caa9e997108b595de.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIDNcGN0cZPzzCbVWTk%2BDpcU3dmnhcFxWY9mCZ01OTON9AiEAt0mQs3CbxZaBZPlAkedhHyUAd29Vb56%2FF5I7CQ4dvwoq0gQIKxAAGgwxODcwMTcxNTA5ODYiDDdqr2GRtO%2FyHiOgziqvBPzmpiuIKNFNXd9M7jYeUyfjjNDX5lbL9sUXmpRsaXggHTtbOufNHWCH3v127eUPzqmarS2OaaPkH90KLrpfyICoxF7COp557wcQDzzecx1ji9HRUXDsrLxOmuDA8ezPURdj%2BIT0pYBRrvf%2FE4WzHAYKs9impYbyCBw%2FuwltdMC%2B0loglAlt%2FvOIJ4mTYNK3q7Gt1BEj6Z3yVn5IvLeDZCXYUUm4bCvjqGjRGl41aw9vbhJsOV%2Ff9jUM2bHrnX5uzxXRc4IKSJXld77m%2B8uG6LQBzgY35cK7WAL0aD%2Fy1hioy7Bt6VIED7r8GhpymVv806xuC1HpOrOHhyMTt%2FvvWeojE%2Fo35GGBpj%2B8ZA2NIkWcCk01lLsD1eBAkZ8uD3u1xBqT9lfRo%2BLR1TOGo01KzCc6mGe0tJFQW0mw3lP0NgNBWAlIkY04vvargMcZ1kLuuAsmHglKbY7zhR75LjGRUYUbpEIvlLHw81dX4ps1YUXYfmpnbCykU0OPg2yzErUXDrbzCrS1XzhsbiquMQiVNbh%2FSbMP6XN%2F6wkoKN9fxmL96x0MmUf8Qu03uhX9JwCrRTQJWVG9pLXBybnBvAxyUn%2F4XyKcsoI8fz6YiR25Zaum9tp0W2KCbVRfvhLoSNFar%2BqiaaMBeoJHdNxrN%2F8%2Ff37ozXDDAi3u2dv9CGfolfusBR84B2ta8rcMPvyBFQq6t7ywyKe0T%2FTgFiV5ilLogtLdSz6g4AUFU2xP%2Fjfb7i0wh6bflgY6qQEQNWCuX6t0ZifX9e2zDeO5eKAK7p8RSTP4h7BNI%2B1HJuKeFNu4cjqL1oc%2BOV3cdcZWCLl4N7VG6q1ALhSXDqtKqrxyZgcXz0WRK%2Fc0yGA8HsMzAQ4pXqgt3jgAJCMho4whzsgssCxTQe7rdF%2FgDjHbKQAtvTXL25FoRaXR74TZpn6%2FVXV0z1vXYiufR%2BPxFQ3hPQPZwMAwbNngl1EyhKjldcmk9Fwbll%2By&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220720T103634Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLGK2OIY5%2F20220720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b04ad0b09258898f5eaa869cb92b81fbfd11c4ef8be541617d0ed51d80b6803b' alt='Reipe img' /> */}

//           <Spinner
//             name='ball-spin-fade-loader'
//             color='green'
//             fadeIn='none'

//           />

//         </div>
//       </div>
//     )
//   }

// //   let as=[1,2,8,4,9]
// // let d= as.filter((a,b)=>{
// //   return a!==2
// // })

// // console.log(as,d)

// // let as=[1,5,7,8,9]
// // let ns=as.map((val,ind)=>{
// //   if(val===5){
// //     as[ind]=10;
// //   }
// // })
// // console.log(as,ns)

  return (
    <div className={ 'App' }>
    {/* <div className={ SelectNameRespi ?'':'App' }> */}
      
      {/* <Input/> */}
      {/* <Routes>
      <Route path='/' element={<Input/>}/>
    
      <Route path='/Icecream' element={<RecipesChild/>}/>
      <Route path='/Chicken' element={<RecipesChild/>}/>
      <Route path='/Ice' element={<RecipesChild/>}/>
      <Route path='/Chilli' element={<RecipesChild/>}/>
      <Route path='/Chilli%20Chicken' element={<RecipesChild/>}/>
      <Route path='/chilli%20chicken' element={<RecipesChild/>}/>
      <Route path='/gee' element={<RecipesChild/>}/>
      <Route path='/localstorage' element={  <LocalStorage />}/>

      </Routes> */}

      {/* <Route path='/ice' element={<RecipesChild/>}/> */}
      {/* <Route path='/icecream' element={<RecipesChild/>}/> */}
      {/* <Route path='/chicken' element={<RecipesChild/>}/> */}
      {/* <Route path='/Chicken' element={<RecipesChild/>}/> */}

  <ReduxInput/>



{/* 
    <div className='Check'>
      <div className='Check_inside'>
        <div className='btn_Parent'>
        <div>  <input placeholder='Write somrthing here'/>
        <p>:</p></div>
       <div>
        <button className='Check_btn_Search'>search</button>
        <button className='Check_btn_Delete'>delete</button>
        <button className='Check_btn_Update'>Update</button>
        </div></div>
      </div>
    </div> */}

    {/* <div>
      <LocalStorage />
    </div>
    */}
    </div>

  );
}

export default App;
