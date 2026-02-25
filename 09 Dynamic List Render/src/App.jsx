import React from 'react'
import DynamicList from './components/DynamicList'

const App = () => {

      const fruits=[
        {id:1,name:"Apple"},
        {id:2,name:"Banana"},
        {id:3,name:"Mango"},
        {id:4,name:"Orange"},
        {id:5,name:"Strawberry"},
      ]



  return (
    <>
    <DynamicList fruits={fruits}/>
    </>
  )
}

export default App