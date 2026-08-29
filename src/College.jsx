import React from 'react'
import './header.css'
import { Link, Navigate, NavLink, Outlet } from 'react-router'
const College = () => {
  return (
    <div>
      <h1>College Page</h1>
      <h3><Link to="/">Go Back to Home</Link></h3><br />
      <NavLink className="Link" to=''>Student</NavLink>
      <NavLink className="Link" to='department'>Department</NavLink>
      <NavLink className="Link" to='details'>Details</NavLink>
      <Outlet/>
    </div>
  )
}

export default College
