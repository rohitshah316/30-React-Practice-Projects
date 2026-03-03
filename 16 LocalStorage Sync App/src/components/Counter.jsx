import React from 'react'
import { useState } from 'react'
import './Counter.css'
import { useEffect } from 'react'

const Counter = () => {

    const useLocalStorage=(key,initialValue)=>{
        const [value,setValue]=useState(()=>{
            const saved=localStorage.getItem(key);
            return saved!==null?JSON.parse(saved):initialValue;
        })

        useEffect(()=>{
            localStorage.setItem(key,JSON.stringify(value))
        },[key,value])


        return [value,setValue]
    }

    const [count,setCount]=useLocalStorage("count",0)

  return (
    <>
    <h1>Counter App Sync With LocalStorage
    </h1>

    <h2>Count: {count}</h2>
    <button onClick={()=>setCount(c=>c+1)}>Count</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default Counter