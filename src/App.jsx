import React, { useId } from 'react'

const App = () => {
  return (
    <div>
      <UserForm/>
      <UserForm2/>
    </div>
  )
}

function UserForm(){
  const name = useId()
  const pass = useId()
  const skills = useId()
  return (
    <>
      <form action="">
        <label htmlFor={name}>Enter Name </label>
        <input type="text" id={name}  /><br /><br />
        <label htmlFor={pass}>Enter Password </label>
        <input type="text" id={pass}  /><br /><br />
        <label htmlFor={skills}>Skills</label>
        <input type="checkbox" id={skills}  />
      </form>
      <hr />
    </>
  )
}

function UserForm2(){
  const user = useId()
  return (
    <>
      <form action="">
        <label htmlFor={user+"name"}>Enter Name </label>
        <input type="text" id={user+"name"}  /><br /><br />
        <label htmlFor={user+"pass"}>Enter Password </label>
        <input type="text" id={user+"pass"}  /><br /><br />
        <label htmlFor={user+"skills"}>Skills</label>
        <input type="checkbox" id={user+"skills"}  />
      </form>
      <hr />
    </>
  )
}
export default App
