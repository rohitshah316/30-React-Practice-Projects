import React from 'react'
import { useState,useEffect } from 'react';

const useUsers = () => {

    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
    const fetchUser= async()=>{
      try{
        setError(null)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if(!response.ok){
          throw new Error("Failed to fetch Users.")
        }
        const json=await response.json();
        setUsers(json);
       


      }catch(err){
        setError(err.message);
      }finally{
         setLoading(false);
      }
    }
fetchUser()
  },[])



  

 return {users,loading,error}
  
}

export default useUsers