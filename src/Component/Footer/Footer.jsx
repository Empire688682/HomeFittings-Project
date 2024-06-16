import React from 'react'
import './Footer.css'
import location_icon from '../Assets/location_icon.png';
import phone_icon from '../Assets/phone_icon.png';
import email_icon from '../Assets/email_icon.png';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer_content">
                <div className="big_col">
                    <h2>CONTACT</h2>
                    <div className="content">
                        <img src={location_icon} alt="" />
                        <p>Plot 26 Channels Tv Avenue, Opic Ogun State</p>
                    </div>
                    <div className="content">
                        <img src={phone_icon} alt="Phone Icon" />
                        <p><a href="tel:+2349154358139">+234 915 435 8139</a></p>
                        <p><a href="tel:+2349154358139">+234 915 435 8139</a></p>
                    </div>
                    <div className="content">
                        <img src={email_icon} alt="Phone Icon" />
                        <p><a href="mailto:asehindej@gmail.com">asehindej@gmail.com</a></p>
                    </div>
                </div>
                <div className="small_col">
                    <h2>QUICK LINKS</h2>
                    <div className="content">
                        <NavLink style={{ textDecoration: "none" }} className='link' to="/">Home</NavLink>
                        <NavLink style={{ textDecoration: "none" }} className='link' to="/about">About</NavLink>
                        <NavLink style={{ textDecoration: "none" }} className='link' to="/project">Project</NavLink>
                        <NavLink style={{ textDecoration: "none" }} className='link' to="/contact">Contact</NavLink>
                    </div>
                </div>
                <div className="small_col">
                    <h2>SOCIAL MEDIA</h2>
                    <div className="content">
                        <a href="https://www.facebook.com" className="social_link" target="_blank" rel="noopener noreferrer">Facebook </a>
                        <a href="https://www.twitter.com" className="social_link" target="_blank" rel="noopener noreferrer"> Twitter </a>
                        <a href="https://www.instagram.com" className="social_link" target="_blank" rel="noopener noreferrer"> Instagram</a>
                        <a href="https://www.linkedin.com" className="social_link" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                        <a href="https://www.youtube.com" className="social_link" target="_blank" rel="noopener noreferrer"> YouTube </a>
                    </div>
                </div>
            </div>
            <p className='copyrighted'>Copyrighted &copy;  2024 HomeFittings </p>
        </div>
    )
}

export default Footer
