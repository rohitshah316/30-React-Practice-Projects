import React from 'react'
import FilterableList from './components/FilterableList'

const App = () => {


  const itemsData = [
  {id:1,name:"Design HomePage", category:"Design",status:"Completed"},
  { id: 2, name: "Build API", category: "Development", status: "Pending" },
  { id: 3, name: "Write Tests", category: "Development", status: "Completed" },
  { id: 4, name: "Create Logo", category: "Design", status: "Pending" },
  { id: 5, name: "Deploy", category:"Development",status: "Completed"}
]
  return (
    <>
    <FilterableList itemsData={itemsData}/>
    </>
  )
}

export default App