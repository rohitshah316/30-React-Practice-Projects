import React from 'react'
import users from '../data/users'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>User List</h1>

        {users.map(user=>(
            <div key={user.id}>
                <Link to={`users/${user.id}`}>{user.name}</Link>
            </div>
        ))}
    </div>
  )
}

export default Home