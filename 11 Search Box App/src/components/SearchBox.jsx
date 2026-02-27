import React from 'react'
import { useState } from 'react'

const SearchBox = ({dataItems}) => {

    const [searchTerm,setSearchTerm]=useState("");

    const filteredItems=dataItems.filter((item)=>(
        item.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
    ))

  return (
    <>
        <h1>Search Box</h1>

        <input 
        type="text"
        placeholder='Search...'
        onChange={(e)=>setSearchTerm(e.target.value)}
        />


        {filteredItems.length>0?
        (
            <ul>
                {filteredItems.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        ):(<p>No results.</p>)}
    </>
  )
}

export default SearchBox