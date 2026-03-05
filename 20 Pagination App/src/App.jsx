import React, { useEffect, useState } from 'react'
import Pagination from './components/Pagination'
import Card from './components/Card';

const App = () => {

    const [status,setStatus]=useState('idle');
    const [data,setData]=useState([]);
    const [error,setError]=useState(null);

    const postPerPage=8;

    const [currentPage,setCurrentPage]=useState(1);

    useEffect(()=>{
      const fetchData=async()=>{
          setStatus("loading");
          setError(null);
          try{
            const response= await fetch('https://jsonplaceholder.typicode.com/posts');

            if(!response.ok) throw new Error("Failed To Fetch Data");

            const json=await response.json();
            setData(json);
            setStatus("success")

          }catch(err){
            setError(err.message);
            setStatus("error");
          }
      }
      fetchData();
    },[])


   const lastPostIndex=currentPage*postPerPage;
   const firstPostIndex=lastPostIndex-postPerPage;

   const currentPosts=data.slice(firstPostIndex,lastPostIndex);


  const totalPages=Math.ceil(data.length/postPerPage)


  return (
    <>
    <h1>Pagination App</h1>


{ status==="loading" && (
  <p>Loading...</p>
)}
{ status==="error" && (
  <p>Error: {error}</p>
)}

<div className="card-container">

{status==="success" && (
  <Card currentPosts={currentPosts}/>
)}
</div>
  


    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages}/>
    </>
  )
}

export default App