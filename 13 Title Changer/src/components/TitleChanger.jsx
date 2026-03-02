import React, { useEffect, useState } from 'react'

const TitleChanger = () => {

    const [count,setCount]=useState(0);


    //runs on every re-render
    // useEffect(()=>{
    //     document.title=`Count: ${count}`
    // })


    //run once(on mount)
    // useEffect(()=>{
    //     document.title=`Count: ${count}`
    // },[])

    //run on change in value(on mount)
    useEffect(()=>{
        document.title=`Count: ${count}`
    },[count])

  return (
    <>
    <h1>Title Changer</h1>

    <h2>Count:{count}</h2>
    <button onClick={()=>setCount(c=>c+1)}>+</button>
    <button onClick={()=>setCount(c=>c-1)}>-</button>
    </>
  )
}

export default TitleChanger