import React, { useState } from 'react'

const App = () => {
  const [data, setData] = useState({
    name:"yash",
    address:{
      city:"Angul",
      country:"India"
    }
  });

  const onName=(val)=>{
    data.name = val;
    setData({...data})
  }
  const onCity=(val)=>{
    setData({...data,address:{...data.address,city:val}})
    console.log(data)
  }
  return (
    <div>
      <input type="text" onChange={(e)=>onName(e.target.value)}/>
      <input type="text" onChange={(e)=>onCity(e.target.value)}/>
      <h2>Name:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
    </div>
  )
}

export default App
