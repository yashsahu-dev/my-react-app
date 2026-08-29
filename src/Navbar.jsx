import React from "react";
import { Link } from "react-router";
import './header.css'

const Navbar = () => {
  return (
    <div className="header">
      <div className="logo">
        <h2>Logo</h2>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
