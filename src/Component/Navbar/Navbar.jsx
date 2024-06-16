import React, { useState } from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import menu_Icon from '../Assets/menu icon.png'
import close_Icon from '../Assets/close icon.png'

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
            <img src={close_Icon} style={{backgroundColor:"transparent"}} alt="" className='menu_close' onClick={()=> setMenu(false)} />
            <NavLink style={{textDecoration:"none"}} className='link' to="/">Home</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/about">About</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/project">Project</NavLink>
            <NavLink style={{textDecoration:"none"}} className='link' to="/contact">Contact</NavLink>
        </ul>
      </div>
      <img src={menu_Icon} alt="menu" onClick={()=> setMenu(true)} className='menu_open' />
    </div>
  )
}

export default Navbar
