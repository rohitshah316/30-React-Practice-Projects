import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const RenderCounter = () => {

    const [count,setCount]=useState(0);

    const renderCount=useRef(0);

    useEffect(()=>{
        renderCount.current++;
    })
  return (
    <>
    <h1>Render Counter</h1>
    <p>State Count: {count}</p>
    <p>Render Count: {renderCount.current}</p>
    <button onClick={()=>setCount(c=>c+1)}>Count: {count}</button>
    </>
  )
}

export default RenderCounter