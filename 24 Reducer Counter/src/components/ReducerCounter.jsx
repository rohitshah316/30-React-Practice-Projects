import React from 'react'
import { useEffect } from 'react';
import { useReducer } from 'react'

const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return 0;

        default:
            return state;
    }
}

const inititalCount=()=>{

const saved=  localStorage.getItem("count");
return saved?Number(saved):0;
}

const ReducerCounter = () => {

    const [count,dispatch]=useReducer(reducer,0,inititalCount);




    useEffect(()=>{
        localStorage.setItem("count",count);
    },[count])

  return (
    <>
    <h1>Reducer Counter</h1>
    <h2>Count:{count}</h2>
    <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
    <button onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
    <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  )
}

export default ReducerCounter