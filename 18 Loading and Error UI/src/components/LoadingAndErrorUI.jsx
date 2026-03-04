import React, { useEffect, useState } from 'react'

const LoadingAndErrorUI = () => {

    const [status,setStatus]=useState("idle");
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);


    const fetchUser=async()=>{
        setStatus("loading");
        setError(null);

        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/users/1");

            if(!response.ok) throw new Error("Faild to Fetch User.");

            if(Math.random()<0.3){
                throw new Error("Network Error.")
            }

            const json= await response.json();
            setData(json);
            setStatus("success")
        }catch(err){
            setError(err.message);
            setStatus("error")
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])

  return (
    <div className='container'>
        <h1>Loading And Error UI</h1>
        {status==="loading" && (
            <div className='spinner'></div>
        )}


        {status==="error" && (
            <div className='error-box'>
                <p>Error: {error}</p>
                <button onClick={fetchUser}>Retry</button>
            </div>
        )}
        {status==="success" && data && (

            <div className='card'>
                <h2>{data.name}</h2>
                <p>{data.email}</p>
                <p>{data.phone}</p>
                <p>{data.company.name}</p>
            </div>
        )}
    </div>
  )
}

export default LoadingAndErrorUI