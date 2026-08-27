import React, { useTransition } from 'react'

const App = () => {
  const [pending,Transition] = useTransition();
  const handleBtn=()=>{
    Transition(async ()=>{
       await new Promise(res=>setTimeout(res,6000))
    })
  }
  return (
    <div>
      <input type="text" /><br />

      {pending?<img style={{width:"100px"}} src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTZvYnFuNWZsYWhqd2M2OG85aDRiejFjd2FjdXdrMTU1a2owZXdxOCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/3oEjI6SIIHBdRxXI40/giphy.gif" alt="" />:null} <br />
      <button type="submit" onClick={handleBtn} disabled={pending} >{pending?"Submitting...":"submit"}</button>
    </div>
  )
}

export default App
