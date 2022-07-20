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

function App() {

  let selectrecipe=useSelector(selectThunkRcipe)

  // let SelectNaeRespi=useSelector(SelectName)
  // console.log(SelectNameRespi)
  
  let selectStatus=useSelector(selectSTatus)
  // const navigate = useNavigate()



// console.log(window.location.href)
// console.log(window.location.pathname)
let path=window.location.pathname;
let SelectNameRespi=useSelector(SelectName)
const navigate = useNavigate()

 
useEffect(()=>{
  if(SelectNameRespi && SelectNameRespi!=='Chicken' && SelectNameRespi!=='Icecream' &&
 SelectNameRespi!=='icecream' && SelectNameRespi!=='Chilli' && SelectNameRespi!=='chilli'
 && SelectNameRespi!=='Chilli chicken' && SelectNameRespi!=='chilli chicken'
  && SelectNameRespi!=='chicken' && SelectNameRespi!=='Ice' &&
  SelectNameRespi!=='Gee' && SelectNameRespi!=='gee' && SelectNameRespi!=='ice'){
  alert('Oops!! go back & search with proper name or Update it')
  navigate("/")

}


},[path])


// if('Chilli'=='Chilli'){
//   console.log('true')
// }

// if(SelectNameRespi && SelectNameRespi!=='Chicken' && SelectNameRespi!=='Icecream' &&
//  SelectNameRespi!=='icecream' && SelectNameRespi!=='chicken' && SelectNameRespi!=='Ice' && SelectNameRespi!=='ice'){
//   alert('oops go back & search with proper name')
// }

  if (selectStatus==='loading') {

    return (
      <div className='loading_app'>
        <div className='loading_spin'>
          <img src='https://www.maggi.co.uk/sites/default/files/styles/maggi_desktop_image_style/public/NUK1265%20maggi%20Recipes%20banner%201500x700px%20opt2A.jpg?h=4f5b30f1&itok=DcsF1RwA' alt='Reipe img' />

          <Spinner
            name='ball-spin-fade-loader'
            color='green'
            fadeIn='none'

          />

        </div>
      </div>
    )
  }

//   let as=[1,2,8,4,9]
// let d= as.filter((a,b)=>{
//   return a!==2
// })

// console.log(as,d)

// let as=[1,5,7,8,9]
// let ns=as.map((val,ind)=>{
//   if(val===5){
//     as[ind]=10;
//   }
// })
// console.log(as,ns)

  return (
    <div className={ SelectNameRespi ?'':'App' }>
      
      {/* <Input/> */}
      <Routes>
      <Route path='/' element={<Input/>}/>
    
      <Route path='/Icecream' element={<RecipesChild/>}/>
      <Route path='/Chicken' element={<RecipesChild/>}/>
      <Route path='/Ice' element={<RecipesChild/>}/>
      <Route path='/Chilli' element={<RecipesChild/>}/>
      <Route path='/Chilli%20Chicken' element={<RecipesChild/>}/>
      <Route path='/chilli%20chicken' element={<RecipesChild/>}/>
      <Route path='/gee' element={<RecipesChild/>}/>


      {/* <Route path='/ice' element={<RecipesChild/>}/> */}
      {/* <Route path='/icecream' element={<RecipesChild/>}/> */}
      {/* <Route path='/chicken' element={<RecipesChild/>}/> */}
      {/* <Route path='/Chicken' element={<RecipesChild/>}/> */}

    </Routes>
   
    </div>

  );
}

export default App;
