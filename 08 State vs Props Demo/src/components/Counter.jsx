import React from 'react'

const Counter = ({count,setCount}) => {

    const handleIncrement=()=>{
        setCount(prev=>prev+1);
    }
    const handleDecrement=()=>{
        setCount(prev=>prev-1);
    }


  return (
    <>
    
    <button onClick={handleIncrement}>+</button>
    <button onClick={handleDecrement}>-</button>
    </>
  )
}

export default Counter