import { useState } from 'react';
// import './App.css'
import User from './User';

function App() {
  const [display,setDisplay] = useState(true);
  
  return (
    <>
    <button onClick={()=>setDisplay(!display)}>Toggle</button>
      {
        display?<User/>:null
      }
    </>
  )
}

export default App
