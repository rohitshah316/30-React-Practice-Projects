import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {

  const [count,setCount]=useState(0);



  return (
    <>
    <h1>States vs Props Demo</h1>

    <h2>Count: {count}</h2>

    <Counter count={count} setCount={setCount}/>
    </>
  )
}

export default App