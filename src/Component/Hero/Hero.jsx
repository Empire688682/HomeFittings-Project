import React from 'react'
import './Hero.css';
import Navbar from '../Navbar/Navbar';
import house_Img from '../Assets/House 1.png'
import Arrow_01 from '../Assets/Arrow_01.png'

const Hero = () => {
    return (
        <div className='hero_section'>
            <Navbar />
            <div className="hero_content">
                <div className="left_colum">
                    <h2>A home is built with love and dreams</h2>
                    <div className="text_arrow">
                    <p>Real estate farm that makes your dreams true </p>
                    <img src={Arrow_01} alt="Arrow" />
                    </div>
                    <div className="btn_links">
                        <button className='btn_1'>Our Project</button>
                        <button className='btn_2'>Contact Us</button>
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
