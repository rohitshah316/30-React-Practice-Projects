import React from 'react'
import useCounter from '../hooks/useCounter'

const ComponentA = () => {

    const {count,increment,decrement,reset}=useCounter(0);
  return (
    <>
        <h1>Counter A</h1>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
  
    </>
  )
}

export default ComponentA