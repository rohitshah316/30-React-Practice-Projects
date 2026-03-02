import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Timer = () => {

    const [time,setTime]=useState(0);
    const [isRunning,setIsRunning]=useState(false);


    useEffect(()=>{
        if(!isRunning) return;

        const interval=setInterval(()=>{
            setTime(prevTime=>prevTime+10)
        },10)

        return ()=>clearInterval(interval)
    },[isRunning]);

    const hours=Math.floor(time/(1000*60*60))
    const minutes=Math.floor((time/(1000*60))%60)
    const seconds= Math.floor((time/1000)%60);
    const milliSeconds=Math.floor((time%1000)/10);

    const format=(num,digits=2)=>(
        num.toString().padStart(digits,"0")
    )


    const handleReset=()=>{
        setIsRunning(false)
        setTime(0)
    }


    useEffect(()=>{
        document.title=`Timer: ${format(hours)}:${format(minutes)}:${format(seconds)}:${format(milliSeconds)}`
    },[time])
  return (
    <>
    <h1>Timer App</h1>
    <h2>
        {format(hours)}:
        {format(minutes)}:
        {format(seconds)}:
        {format(milliSeconds)}
        
        </h2>
        <button onClick={()=>setIsRunning(true)}>Start</button>
        <button onClick={()=>setIsRunning(false)}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Timer