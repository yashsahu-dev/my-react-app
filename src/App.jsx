import React from 'react'
import { useRef } from 'react'
const App = () => {

  const inputRef =  useRef(null)
  const h1Ref =  useRef(null)
  const inpHandler=()=>{
    inputRef.current.focus();
    inputRef.current.style.color = "blue"
  }
  const h1Handler=()=>{
    h1Ref.current.style.color = "red"
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={inpHandler}>Click</button>
      <h1 ref={h1Ref}>Hello</h1>
      <button onClick={h1Handler}>Click</button>
    </div>
  )
}

export default App
