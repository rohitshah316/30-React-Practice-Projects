import React, { useState } from 'react'

const AddEditDelete = () => {

    const [items,setItems]=useState(["Apple","Banana"]);
    const [input,setInput]=useState("");
    const [editIndex,setEditIndex]=useState(null);

    const handleAdd=()=>{
        if(!input.trim()) return;

        if(editIndex!==null){
            setItems(
                items.map((item,index)=>(
                    editIndex===index?input:item
                ))
            )
            setEditIndex(null)
        }else{
            setItems([...items,input])
        }
        setInput("")

    }

    const handleEdit=(index)=>{
        setInput(items[index]);
        setEditIndex(index)
    }

    const handleDelete=(indexToDelete)=>{
        setItems(items.filter((_,index)=>index!==indexToDelete));

        if(editIndex===indexToDelete){
            setEditIndex(null);
            setInput("")
        }
    }

  return (
    <>
        <h1>Add/Edit/Delete List Items</h1>

        <input type="text" 
        placeholder='Enter Item'
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={handleAdd}>{editIndex!==null?"Update":"Add"}</button>

        <ul>
            {items.map((item,index)=>(
                <li key={index}>
                    
                    {item}
                    <button onClick={()=>handleEdit(index)}>Edit</button>
                    <button onClick={()=>handleDelete(index)}>Delete</button>
                    </li>
            ))}
        </ul>
    </>
  )
}

export default AddEditDelete