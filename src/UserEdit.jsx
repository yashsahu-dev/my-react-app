import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UserEdit = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  useEffect(()=>{
    GetUserData()
  },[])

  const url = "http://localhost:3000/Users/"+id;
  const GetUserData=async ()=>{
    let response = await fetch(url)
    response = await response.json()
    setName(response.name)
    setAge(response.age)
    setEmail(response.email)
  }
  
  const EditData=async ()=>{
    
    let response = await fetch(url,{method:'put',body:JSON.stringify({name,email,age})})
    response = await response.json()
    if(response){
        alert("Updated data");
        navigate("/")
    }
  }

  return (
    <>
      <h2>Edit User</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      <br />
      <br />
      <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <br />
      <br />
      <input type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
      <br />
      <br />
      <button onClick={EditData}>Submit</button>
    </>
  );
};

export default UserEdit;
