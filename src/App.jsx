import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [name, setName] = useState('');
  const [nameerr, setNameErr] = useState();

  const [pass, setPass] = useState('');
  const [passerr, setPassErr] = useState();

  const handleName=(e)=>{
    if(e.target.value.length>5){
      setNameErr('only 5 chars allowed!!!');
    }
    else{
      setNameErr('')
    }
  }
  const handlePass=(e)=>{
    let regex = /^[A-Z0-9]+$/i
    if(!regex.test(e.target.value)){
      setPassErr('only alphanumeric chars allowed!!!');
    }
    else{
      setPassErr('')
    }
  }
  return (
    <div>
      <input type="text" className={nameerr?'error':''} onChange={handleName} placeholder='Enter name' /><span>{nameerr}</span><br /><br />
      <input type="text" className={passerr?'error':''} onChange={handlePass} placeholder='Enter password' /><span>{passerr}</span><br /><br />
      
      <button disabled={nameerr || passerr}>Login</button>
    </div>
  )
}

export default App
