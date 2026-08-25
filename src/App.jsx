import React from 'react'
import User from './User'

const App = () => {
  const displayName = (name)=>{
    alert('hello,'+name)
  }
  return (
    <div>
      <User displayname={displayName} name='yash' />
      <User displayname={displayName} name='Rahul' />
      <User displayname={displayName} name='Alok' />
      <User displayname={displayName} name='Manas' />
    </div>
  )
}

export default App
