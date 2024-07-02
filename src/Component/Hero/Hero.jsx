import React from 'react'
import './Hero.css'
import HomeFitting_cover from '../Assets/Homefittings – cover.png'
import Arrow_01 from '../Assets/Arrow_01.png'
import { NavLink } from 'react-router-dom';
import { useInView } from "react-intersection-observer";

const Hero = () => {
    const { ref: cl1Ref, inView: cl1View } = useInView({ triggerOnce: true });
    const { ref: cl2Ref, inView: cl2View } = useInView({ triggerOnce: true });
    return (
        <div className='hero_section'>
            <div className="hero_content">
                <div ref={cl1Ref} className={cl1View ? "left_colum observer" : "left_colum"}>
                    <h2>Dealers of Tile & Sanitary Ware</h2>
                    <div className="text_arrow">
                        <p>Make your dream home with us</p>
                        <img src={Arrow_01} alt="Arrow" />
                    </div>
                    <div className="btn_links">
                        <NavLink style={{ textDecoration: "none" }} className='btn_1' to="/project">Our Project</NavLink>
                        <NavLink style={{ textDecoration: "none" }} className='btn_2' to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div ref={cl2Ref} className={cl2View ? "right_colum observer" : "right_colum"} >
                    <img src={HomeFitting_cover} alt="Bg" />
                </div>
            </div>
        </div>
    )
}

export default Hero
