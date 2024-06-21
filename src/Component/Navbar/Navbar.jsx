import React, { useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import menu_Icon from '../Assets/menu_icon.png'
import close_Icon from '../Assets/close_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className='navbar_section'>
      <div className="logo">
        <NavLink style={{textDecoration:"none"}} to="/"><h1>HOMEFITTINGS.NG</h1></NavLink>
      </div>
      <div className={menu? "menu":"not_menu"}>
        <ul>
            <img src={close_Icon} style={{backgroundColor:"transparent"}} alt="" className='menu_close' onClick={()=> setMenu(false)} />
            <NavLink style={{textDecoration:"none"}} className='link' to="/">Home</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/about">About</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/project">Project</NavLink>
            <a style={{textDecoration:"none"}} href="https://wa.link/ph3nic" className='link' target="_blank">Contact us</a>
        </ul>
      </div>
      <img src={menu_Icon} alt="menu" onClick={()=> setMenu(true)} className='menu_open' />
    </div>
  )
}

export default Navbar
