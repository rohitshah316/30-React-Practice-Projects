import React from 'react'
import { useState } from 'react'

const useCounter = (initialValue) => {

    const [count,setCount]=useState(initialValue);

    const increment=()=>setCount(c=>c+1);
    const decrement=()=>setCount(c=>c-1);
    const reset=()=>setCount(initialValue);

 
    return {count,increment,decrement,reset};
  
}

export default useCounter