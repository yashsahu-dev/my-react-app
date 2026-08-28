import React from 'react'

const AddUser = ({setUser}) => {
  return (
    <div>
        <h2>Add User</h2>
        <input type="text" onChange={(e)=>setUser(e.target.value)}/>
        <hr />
    </div>
  )
}

export default AddUser
