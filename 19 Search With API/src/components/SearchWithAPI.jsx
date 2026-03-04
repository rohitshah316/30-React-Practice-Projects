import React, { useEffect, useState } from 'react'

const SearchWithAPI = () => {

    const [query,setQuery]=useState("");
    const [loading,setLoading]=useState();
    const [results,setResults]=useState([]);
    const [error,setError]=useState(null);


    useEffect(()=>{
        if(!query){
          setResults([]);
          return;
        }

        const controller= new AbortController();
        const signal=controller.signal;

        const timeout=setTimeout(() => {

          const fetchUser=async()=>{
              try{
                setLoading(true);
                setError(null);

                const response= await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`,{signal})

                if(!response.ok){
                  throw new Error("Failed to Fetch Data.")
                }
                
                const json= await response.json();
                setResults(json)

              }catch(err){
                  if(err.name!=="AbortError"){
                    setError(err.message)
                  }
              }finally{
                setLoading(false);
              }
            
          }
          fetchUser();
        }, 500);


        return ()=>{
          controller.abort()
          clearTimeout(timeout)
        }
    },[query])

  return (

    <>
    <h1>Search With API</h1>
    <div className='container input-container'>
      
      <input type="text" 
      placeholder='Type a Name...'
      value={query}
      onChange={(e)=>setQuery(e.target.value)}
      />

     
    </div>
  
    <div className="container">
        {
      loading && (
        <div className='spinner'></div>
      )
     }

     {error && (
      <p className='error'>❌: {error}</p>
     )}

     <ol className='search-result'>
      {
        results.map((user)=>(
          <li key={user.id}>{user.name}-{user.email}</li>
        ))
      }
     </ol>
     
    </div>
    </>
  )
}

export default SearchWithAPI