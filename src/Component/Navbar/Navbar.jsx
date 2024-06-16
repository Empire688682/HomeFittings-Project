import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar_section'>
      <div className="logo">
        <NavLink style={{textDecoration:"none"}} to="/"><h1>HOMEFITTINGS.NG</h1></NavLink>
      </div>
      <div className="menu">
        <ul>
            <NavLink style={{textDecoration:"none"}} to="/"><li>Home</li></NavLink>
            <NavLink style={{textDecoration:"none"}} to="/about"><li>About</li></NavLink>
            <NavLink style={{textDecoration:"none"}} to="/project"><li>Project</li></NavLink>
            <li><NavLink style={{textDecoration:"none"}} to="/contact" className='link'>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
