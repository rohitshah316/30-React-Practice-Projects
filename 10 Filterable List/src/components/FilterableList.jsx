import React, { useState } from 'react'

const FilterableList = ({itemsData}) => {

    const [categoryFilter,setCategoryFilter]=useState("All");
    const [statusFilter,setStatusFilter]=useState("All");


    const filteredItems=itemsData.filter((item)=>{
        const categoryMatch=(categoryFilter==="All" || item.category===categoryFilter);
        const statusMatch=(statusFilter==="All" || item.status===statusFilter);

        return categoryMatch && statusMatch;
    })
    


  return (
    <>
        <h1>Filterable Items</h1>

        {/* Category Filter */}
        <select onChange={(e)=>setCategoryFilter(e.target.value)}>
            <option value="All">All Category</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
        </select>

        {/* Status Filter */}
        <select onChange={(e)=>setStatusFilter(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
        </select>


        <p>Filtered Result:{filteredItems.length}</p>
        {filteredItems.length>0?
        (<ul>
            {filteredItems.map((item)=>(
              <li key={item.id}>{item.name}-{item.category}-{item.status}</li>
            ))}
        </ul>):
        (<p>No items matched.</p>)
      }
    </>
  )
}

export default FilterableList