import React from 'react'

const DynamicList = ({fruits}) => {
  return (
    <>
    <h1>Dynamic List</h1>

    <ul>
        {fruits.map((fruit)=>(
            <li key={fruit.id}>{fruit.name}</li>
        ))}
    </ul>
    </>
  )
}

export default DynamicList