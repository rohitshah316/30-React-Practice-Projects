import React from 'react'
import users from '../data/users'
import { useParams,Link } from 'react-router-dom'
const User = () => {

    const {id} = useParams();

    const user=users.find(u=>u.id===parseInt(id))

    if(!user){
        return <h2>User Not Found</h2>
    }
  return (
    <div>
        <h1>User Detail</h1>
        <p>Name: {user.name}</p>
        <p>User: {user.age}</p>

        <Link to='/'>Back</Link>
    </div>
  )
}

export default User