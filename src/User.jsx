import React from 'react'
// import { useState } from 'react'

const User = ({dets}) => {
    
  return (
    <div>
      <hr />
        <h1>Name: {dets.name}</h1>
        <h1>Age: {dets.age}</h1>
        <h1>Email: {dets.email}</h1>
    </div>
  )
}

export default User
