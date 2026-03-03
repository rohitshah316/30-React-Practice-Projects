import React, { useEffect, useState } from 'react'

const APIFetchDemo = () => {

    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{

        const fetchUsers=async()=>{
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users");

                if(!response.ok){
                    throw new Error("Failed To Fetch Users.")
                }

                const data=await response.json();
                setUsers(data)
            }catch(err){
                setError(err.message);
            }finally{
                setLoading(false);
            }

        }

        fetchUsers();


       
    },[])


    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error}</p>

  return (
    <>
        <h1>API Fetch Demo</h1>
        <h2>User List</h2>
        <ul>
            {users.map(user=>(
                <li key={user.id}>{user.name}-Phone:({user.phone})</li>
            ))}
        </ul>
    </>
  )
}

export default APIFetchDemo