import React from 'react'

const App = () => {


  const name="Rohit";
  const age=20;
  const score=100;




  return (

    


    <>


      <div className='flex flex-col justify-center items-center'>
<h1 className='font-bold text-3xl'>JSX Playground</h1>


      <h2 className='font-bold text-2xl'>Render Variable</h2>
      <p>Hello, {name}. You are {age} years old.</p>
      <p>You have scored: {score}</p>


      <h2 className='font-bold text-2xl'>Conditional Rendering</h2>
      {score>=40 && <p>You have passed by scoring {score}.</p>}


    <h2 className='font-bold text-2xl'>Ternary Operator</h2>
   <p>
    {score>40?"Pass":"Fail"}
    </p> 

      </div>
      
    </>
  )
}

export default App