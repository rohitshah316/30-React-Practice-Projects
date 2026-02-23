import React, { useState } from 'react'

const App = () => {

    const [darkMode,setDarkMode]=useState(false);


    const toggleTheme=()=>{
      setDarkMode(!darkMode)
    }




    const [showElement,setShowElement]=useState(false);

    const hideElmement=()=>{
      setShowElement(!showElement)
    }


  return (
    <div className={darkMode?"app dark":"app"}>


    <h1>Dark-Light Mode</h1>
    <button onClick={toggleTheme} className={darkMode?"dark-btn":" "}>Switch to {darkMode?"Light":"Dark"} Mode</button>
      

    <h1>Show-Hide Element</h1>
    <button onClick={hideElmement} className={darkMode?"dark-btn":" "}>{showElement?"Show":"Hide"} Element</button>
    
    <div className={`${showElement?"box-hidden":"box"} ${darkMode?"dark-box":""}`}>
      <p>This element can be hidden.</p>
    </div>
    </div>
  )
}

export default App