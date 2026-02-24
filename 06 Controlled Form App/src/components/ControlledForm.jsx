import React, { useState } from 'react'

const ControlledForm = () => {

const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [role,setRole]=useState("");

    

const handleName=(e)=>{

        setName(e.target.value);
        
    }
const handleEmail=(e)=>{

        setEmail(e.target.value);
        
    }
const handleRole=(e)=>{

        setRole(e.target.value);
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
            console.log(name);
            console.log(email);
            console.log(role);

            setName("");
            setEmail("");
            setRole("");
    }
  return (
    <>
        <h1>Controlled Form</h1>
        <form onSubmit={handleSubmit}>

            <div>
                <label>Name:</label>
                <input type="text" onChange={handleName} value={name} />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" onChange={handleEmail} value={email} />
            </div>
            <div>
                <label>Role:</label>
                <select name="" value={role} onChange={handleRole}>

                    <option value="">Select Role</option>
                    <option value="Developer">Developer</option>

                    <option value="Designer">Designer</option>

                    <option value="Manager">Manager</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default ControlledForm