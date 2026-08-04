import { useState } from 'react';
import './App.css'
import Counter from './Counter';

function App() {
  const [fruit,setFruit] = useState("Apple");
  function HandleFruit(){
    setFruit("Banana");
  }
  return (
    <>
      <h1>{fruit}</h1>
      <button onClick={()=>{HandleFruit()}}>Click Me</button>
      <Counter/>
    </>
  )
}

export default App
