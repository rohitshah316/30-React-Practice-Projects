import React from 'react'
import useCounter from '../hooks/useCounter'

const ComponentB = () => {

    const {count,increment,decrement,reset}=useCounter(10);
  return (
    <>
        <h1>Counter B</h1>
        <h2>Count:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
  
    </>
  )
}

export default ComponentB