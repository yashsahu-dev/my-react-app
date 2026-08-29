import React, { useContext } from 'react'
import { SubjectContext } from './Context'

const Subject = () => {
  const subject = useContext(SubjectContext)
  return (
    <div style={{backgroundColor:"green",padding:10}}>
      <h2>Subject is:{subject}</h2>
    </div>
  )
}

export default Subject
