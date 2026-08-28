import React, { useState } from 'react'

const App = () => {
  const [User, setUser] = useState("");
  const [Users, setUsers] = useState([]);
  const HandleUser=()=>{
    setUsers([...Users,User]);
  }

  const Total = Users.length;
  const last = Users[Users.length-1];
  const unique = [...new Set(Users)].length
  return (
    <div>
      <h2>Total users: {Total}</h2>
      <h2>Last user: {last}</h2>
      <h2>Unique users: {unique}</h2>
      <input type="text" onChange={(e)=>setUser(e.target.value)} /><br />
      <button onClick={HandleUser}>Add User</button>
      {
        Users.map((item)=>(
          <h4>{item}</h4>
        ))
      }
    </div>
  )
}

export default App
