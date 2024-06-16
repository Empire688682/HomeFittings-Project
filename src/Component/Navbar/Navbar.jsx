import React, { useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu)
  return (
    <div className='navbar_section'>
      <div className="logo">
        <NavLink style={{textDecoration:"none"}} to="/"><h1>HOMEFITTINGS.NG</h1></NavLink>
      </div>
      <div className={menu? "menu":"not_menu"}>
        <ul>
            <AiOutlineClose className='menu_close' onClick={()=> setMenu(false)} /> 
            <NavLink style={{textDecoration:"none"}} className='link' to="/">Home</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/about">About</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/project">Project</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/contact">Contact</NavLink>
        </ul>
      </div>
      <  CiMenuFries onClick={()=> setMenu(true)} className='menu_open'/>
    </div>
  )
}

export default Navbar
