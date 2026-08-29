import React from 'react'
import { Route, Routes } from 'react-router'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
    </div>
  )
}

export default App
