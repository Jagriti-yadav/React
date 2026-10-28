import React from 'react'
import {useNavigate, useLoaderData} from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate();
  const users = useLoaderData();
  function handleClick(){
    navigate('/contact')
  }

  console.log(users)
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleClick}>Move to contact page</button>
      <p>User data (example of loader)</p>
      {users.map( user => (
        <p key={user.id}>{user.name}</p>
      ))}

    </div>
  )
}

export default Home
