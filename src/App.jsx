import React from 'react'
import User from './User'
import Wrapper from './Wrapper'

const App = () => {
  return (
    <div>
      {/* <User name="Yash"/>
      <User/> */}

      <Wrapper color="orange">
        <h1>Yash</h1>
      </Wrapper>

      <Wrapper>
        <h1>Yash</h1>
      </Wrapper>
      <Wrapper>

        <h1 style={{color:"red"}}>Yash</h1>
      </Wrapper>
    </div>
  )
}

export default App
