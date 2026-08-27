import React, { useRef } from 'react'
import Userinput from './Userinput';

const App = () => {
  const inpRef = useRef();
  const InpHandler=()=>{
    inpRef.current.focus();
    inpRef.current.value = 1000;
  }
  return (
    <div>
      <Userinput ref={inpRef} />
      <button onClick={InpHandler}>Click</button>
    </div>
  )
}

export default App
