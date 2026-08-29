import React from 'react'
import './header.css'
import { Navigate, NavLink, Outlet } from 'react-router'
const College = () => {
  return (
    <div>
      <h1>College Page</h1>
      <NavLink className="Link" to='student'>Student</NavLink>
      <NavLink className="Link" to='department'>Department</NavLink>
      <NavLink className="Link" to='details'>Details</NavLink>
      <Outlet/>
    </div>
  )
}

export default College
