import React, { useCallback, useState } from 'react'

const Button=React.memo(function Button( {handleClick}){
    console.log("Child Rendered");
    return <button onClick={handleClick}>Click</button>
});

const CallbackDemo = () => {

    const [count,setCount]=useState(0);

    const handleClick=useCallback(()=>{
        console.log("Button Clicked");

    },[])


  return (
    <div>
        <h1>useCallBack Demo</h1>
        <p>Count: {count}</p>
        <button onClick={()=>setCount(c=>c+1)}>Count</button>

        <Button handleClick={handleClick}/>
    </div>
  )
}

export default CallbackDemo