import React from 'react'

const User = ({displayname,name}) => {
  return (
    <div>
      <button onClick={()=>{
        displayname(name)
      }}>Click</button>
    </div>
  )
}

export default User
