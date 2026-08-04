import { useState } from 'react';
// import './App.css'
import User from './User';
import Student from './Student';

function App() {
  const [name,setName] = useState();

  // let userObj = {
  //   "name":"Yash",
  //   "age":20,
  //   "email":"yash@test.com"
  // }
  // let userObj2 = {
  //   "name":"Rahul",
  //   "age":23,
  //   "email":"rahul@test.com"
  // }


  return (
    <>
      {/* <User dets={userObj} /> 
      <User dets={userObj2} />  */}

      <button onClick={()=>setName("Yash")}>Click</button>
      {name && <Student name={name}/>}
    </>
  )
}

export default App
