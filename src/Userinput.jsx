import React from 'react'

const Userinput = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  )
}

export default Userinput
