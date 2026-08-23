import React from 'react'
import Clock from './Clock'
import {useState} from 'react'


const App = () => {
  const [color, setColor] = useState("Green");
  return (
    <div>
      <h1>React JS Task</h1>
      <select name=""  onChange={(e)=>setColor(e.target.value)}>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
      </select>
      <Clock color={color}/>

    </div>
  )
}

export default App
