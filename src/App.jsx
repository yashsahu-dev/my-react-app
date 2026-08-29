import React from 'react'
import { Route, Routes } from 'react-router'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Page404 from './Page404'
import College from './College'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<h1>Home Page</h1>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/college' element={<College/>} >
            <Route path='student' element={<h1>Student Page</h1>}/>
            <Route path='department' element={<h1>Dept. Page</h1>}/>
            <Route path='details' element={<h1>Details Page</h1>}/>
          </Route>
          <Route path='/*' element={<Page404/>} />
        </Routes>
    </div>
  )
}

export default App
