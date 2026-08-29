import React from 'react'
import { useActionState } from 'react'

const App = () => {
  const HandleForm=async(prev,formData)=>{
    const name = formData.get('name')
    const pass = formData.get('pass')
    await new Promise(res=>setTimeout(res,3000))
    // console.log("Called",name,pass);
    if(name && pass){
      return {msg:"Data submitted!!!",name,pass}
    }
    else{
      return {Error:"Unable to submit...",name,pass}
    }
  }
  const [data,action,pending] = useActionState(HandleForm,undefined);
  
  return (
    <div>
      <form action={action}>
        <input type="text" name='name' placeholder='Enter name' /><br /><br />
        <input type="password" name='pass' placeholder='Enter password' /><br /><br />
        <button disabled={pending}>Submit</button>
      </form>
      {
        data?.Error && <span style={{color:"red"}}>{data?.Error}</span>
      }
      {
        data?.msg && <span style={{color:"green"}}>{data?.msg}</span>
      }
      <h3>Name:{data?.name}</h3>
      <h3>Password:{data?.pass}</h3>
    </div>
  )
}

export default App
