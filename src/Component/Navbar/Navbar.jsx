import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar_section'>
      <div className="logo">
        <h1>HOMEFITTINGS.NG</h1>
      </div>
      <div className="menu">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
