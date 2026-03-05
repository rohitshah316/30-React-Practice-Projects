import React from 'react'

const Card = ({currentPosts}) => {
  return (
    <>
        {currentPosts.map((post)=>(
    <div key={post.id} className='card'>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      </div>
  ))}
    </>
  )
}

export default Card