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
  return (
    <div className='RecipesChild'>
       <div className='RecipesChild_btns'> <button onClick={handleeraseResipe}>Clear {SelectNameRespi}</button>
       <button onClick={gobacknavugator}>{`<`}-- Go back</button></div>
       {selectrecipe? <div>
            {selectrecipe.hits?.map((item)=>{return(
                <div key={Math.random()} className='recipes'>
                  <div className='recipes_inside'>
                  <div className='recipes_inside_name'> <h1>{item.recipe.label}</h1> </div>
                 <div>   <img src={item.recipe.image}  alt='recipe'/></div>
                  </div>
                </div>
            )

            })}
          </div>:null}
    </div>
  )
}

export default RecipesChild
