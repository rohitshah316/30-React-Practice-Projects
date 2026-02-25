import React from 'react'
import { useState } from 'react'
import './MultiInputForm.css'

const MultiInputForm = () => {

    const [formData,setFormData]=useState({
        name:"",
        phone:"",
        gender:"",
        age:"",
         })



         const handleChange=(e)=>{
            const {name,value,type}=e.target;

            setFormData((prev)=>({
                ...prev,[name]:type==="number"?Number(value):value,
            }))
         }


         const handleSubmit=(e)=>{
            e.preventDefault();

            console.log(formData)
         }


         const handleEnter=(e)=>{
            if(e.key==="enter"){
                handleSubmit();
            }
         }
  return (
    <>
        <h1>Multi Input Form</h1>


        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" id='name' placeholder='Enter your Full Name' onChange={handleChange} value={formData.name}/>
            </div>
            <div>
                <label htmlFor="phone">Phone No.:</label>
                <input type="number" name="phone" id='phone' placeholder='Enter your Phone Number' onChange={handleChange} value={formData.phone}/>
            </div>
            <div className='gender'>
               <label htmlFor="gender">Gender:</label>
               <input type="radio" name="gender" id="male" value="male" checked={formData.gender==="male"} onChange={handleChange}/>
               <label htmlFor="male">Male</label>
               <input type="radio" name="gender" id="female" value="female" checked={formData.gender==="female"} onChange={handleChange}/>
               <label htmlFor="female">Female</label>
            </div>

            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" name="age" id="age" onChange={handleChange} value={formData.age}/>
            </div>


            <button type="submit">Submit</button>

        </form>
    </>
  )
}

export default MultiInputForm