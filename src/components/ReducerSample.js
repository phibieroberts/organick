import React from 'react'
import { useReducer } from 'react'

    //initial state
const initialState=0
//reducer
//the action arguement in reducer uses the switch statement
const reducer=(state, action)=>{
switch (action){
    case 'increment':
    return state +1
    case 'decrement' :
        return state - 1
        case "reset":
            return initialState
            default:
                return state
}}

function ReducerSample() {
    //the use reducer accepts two arguements- step 1
    //useReducer(reducer,initialState)
    //assigning the count, dispatch later
    const [count, dispatch]=useReducer(reducer, initialState)
    //define the reducer function and the initial state

  return (
    <div>
        <div> count -{count}</div>
        <button onClick={()=> dispatch("increment")}>increment</button>
        <button onClick={()=> dispatch("decrement")}>Decrement</button>
        <button onClick={()=> dispatch("reset")}>Reset</button>
        <button onClick={()=> dispatch("increment")}>increment</button>


    </div>
  )
}

export default ReducerSample