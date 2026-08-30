import React, { useState } from 'react'

const UserAdd = () => {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [email, setEmail] = useState();

    const CreateUser=async ()=>{

        let response = await fetch("http://localhost:3000/Users",{
            method:"post",
            body:JSON.stringify({name,email,age})
        })
        response = await response.json()
        if(response){
            alert("New User Added");
        }
    }
  return (
    <div>
      <h2>Add User</h2>
      <input type="text" placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/><br /><br />
      <input type="text" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)} /><br /><br />
      <input type="text" placeholder='Enter Age' onChange={(e)=>setAge(e.target.value)} /><br /><br />
      <button onClick={CreateUser}>Submit</button>
    </div>
  )
}

export default UserAdd
