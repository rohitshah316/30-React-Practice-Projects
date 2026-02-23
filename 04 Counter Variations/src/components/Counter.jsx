import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count,setCount]=useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleReset=()=>{
        setCount(0);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }
    const handleIncrementby10=()=>{
        setCount(count+10);
    }

  return (
    <>
        <h1>Counter</h1>
        <p>{count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrementby10}>+10</button>

    </>
  )
}

export default Counter