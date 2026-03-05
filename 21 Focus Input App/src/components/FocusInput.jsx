import React, { useRef, useState } from 'react'

const FocusInput = () => {

    const [focused,setFocused]=useState(false);

    const inputRef=useRef(null);


    const handleClick=()=>{
        inputRef.current.focus();
        setFocused(true)
    }
  return (
    <>
    <h1>Focus Input App</h1>
    <input type="text"
    ref={inputRef}
    className={focused?'input-bg':''}
    />
    <button onClick={handleClick}>Click To Focus</button>
    </>
  )
}

export default FocusInput