import React from 'react'

const Pagination = ({currentPage,setCurrentPage,totalPages}) => 
   
  
  {

    const pages=[];
   for(let i=1;i<=totalPages;i++){
    pages.push(i);
   }
  return (
    <div className='button-container'>
      {pages.map((page)=>(
        <button key={page} 
        className={currentPage===page?'active':''}
        onClick={()=>setCurrentPage(page)}
        >{page}</button>
      ))}
    </div>
  )
}

export default Pagination