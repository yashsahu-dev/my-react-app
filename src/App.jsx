import React from 'react'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <h1>Input Field</h1>
      <input type="text" placeholder='Type anything' value={value} onChange={(e)=>setValue(e.target.value)} />
      <h2>{value}</h2>
      <button onClick={()=> setValue('')}>Clear</button>
    </div>
  )
}

export default App;
