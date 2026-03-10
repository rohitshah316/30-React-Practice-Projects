import React from 'react'
import SearchBar from '../components/SearchBar'
import useUsers from '../hooks/useUsers';
import UserCard from '../components/UserCard';
import { useState } from 'react';

const UsersPage = () => {

   const [search,setSearch]=useState("");
   const {users,loading,error}=useUsers();

   const filteredUser=users.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
      <h1>User List</h1>
      <SearchBar value={search} onChange={setSearch}/>

        {loading && <h2>Loading</h2>}
  {error && <h2>Error:{error}</h2>}
  {filteredUser.map((user)=>(
      <UserCard key={user.id} user={user}/>
    ))}

    </div>
  )
}

export default UsersPage