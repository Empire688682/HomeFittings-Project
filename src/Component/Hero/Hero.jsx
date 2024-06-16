import React from 'react'
import './Hero.css'
import house_Img from '../Assets/House_1.png'
import Arrow_01 from '../Assets/Arrow_01.png'
import { NavLink } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero_section'>
            <div className="hero_content">
                <div className="left_colum">
                    <h2>A home is built with love and dreams</h2>
                    <div className="text_arrow">
                    <p>Real estate farm that makes your dreams true </p>
                    <img src={Arrow_01} alt="Arrow" />
                    </div>
                    <div className="btn_links">
                    <NavLink style={{textDecoration:"none"}} className='btn_1' to="/project">Our Project</NavLink>
                    <NavLink style={{textDecoration:"none"}} className='btn_2' to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div className="right_colum">
                    <img src={house_Img} alt="Bg" />
                </div>
            </div>
        </div>
    )
}

export default Hero
