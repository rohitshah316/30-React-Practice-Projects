import React from 'react'
import { useState } from 'react'

const App = () => {

    const [count,setCount]=useState(0);
    const handleCount=()=>{
      setCount(count+1);
    }


    const [inputVal,setInputVal]=useState("");
    const handleInput=(e)=>{
      setInputVal(e.target.value);
    }


    const [keyPress,setKeyPress]=useState("");
    const handleKeyPress=(e)=>{
      setKeyPress(e.key);
    }

  return (
    <>
    <h1>Event Handling</h1>
    <div>
      <button onClick={handleCount}>Clicked: {count}</button>
    <p>Button Clicked: {count}</p>
    </div>


    <div>
      <input type="text" onChange={handleInput} />
      <p>You Entered: {inputVal}</p>
    </div>
    

    <div>
      <input type="text" onKeyDown={handleKeyPress}/>
      <p>You pressed: {keyPress}</p>
    </div>
    </>
  )
}

export default App