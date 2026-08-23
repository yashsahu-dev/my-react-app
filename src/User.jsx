import React from 'react'

const User = ({data}) => {
  return (
    <div key={data.ID} style={{"border":"2px solid green","width":"400px","margin":"20px","padding":"10px"}}>
      <h3>Name: <span style={{"color":"blue"}}>{data.Name}</span></h3>
      <h3>Email: <span style={{"color":"blue"}}>{data.Email}</span></h3>
      <h3>Age: <span style={{"color":"blue"}}>{data.Age}</span></h3>
    </div>
  )
}

export default User
