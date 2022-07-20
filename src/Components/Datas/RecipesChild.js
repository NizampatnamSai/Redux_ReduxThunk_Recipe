import React from 'react'
import { eraceRecipe, selectThunkRcipe } from '../Redux/ReduxThunkSlice'
import './RecipesChild.css'
import { useDispatch,useSelector } from 'react-redux'
import { SelectName } from '../Redux/Redux_Slice'
import { Navigate, useNavigate } from 'react-router-dom'


const RecipesChild = () => {
    let selectrecipe=useSelector(selectThunkRcipe)
    const navigate = useNavigate()
  let SelectNameRespi=useSelector(SelectName)

  let dispatch=useDispatch()
  let handleeraseResipe=()=>{
     dispatch(
        eraceRecipe()
     )
  }

  let gobacknavugator=()=>{
    navigate("/")

  }


  // let SelectNameRespi=useSelector(SelectName)
// if(SelectNameRespi){
//   console.log('ssreredjk')

// }
// console.log(window.location.pathname)
// let path=window.location.pathname

//   if(path!=='' && path!=='Chicken' && path!=='Icecream' &&
//    path!=='icecream' && path!=='chicken' && path!=='Ice' && path!=='ice'){
//     alert('oops go back & search with proper name')
//     console.log('sdjk')
//   }


  return (
    <div className='RecipesChild'>
       <div className='RecipesChild_btns'> <button onClick={handleeraseResipe}>Clear {SelectNameRespi}</button>
       <button onClick={gobacknavugator}>{`<`} Go back</button></div>
       {selectrecipe? <div>
            {selectrecipe.hits?.map((item)=>{return(
                <div key={Math.random()} className='recipes'>
                  <div className='recipes_inside'>
                  <div className='recipes_inside_name'> <h1>{item.recipe.label}</h1> </div>
                 <div className='recipes_inside_img'>   <img src={item.recipe.image}  alt='recipe'/></div>
                  </div>
                </div>
            )

            })}
          </div>:null}
    </div>
  )
}

export default RecipesChild
