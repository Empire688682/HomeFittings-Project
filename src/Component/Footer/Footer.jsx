import React, { useEffect } from 'react'
import './Footer.css'
import location_icon from '../Assets/location_icon.png';
import phone_icon from '../Assets/phone_icon.png';
import email_icon from '../Assets/email_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { NavLink } from 'react-router-dom';
import back_Top from '../Assets/backToTop.png';
import ScrollReveal from 'scrollreveal';

const Footer = () => {
    useEffect(() => {
          // Ensure ScrollReveal is properly initialized and elements are present in the DOM
          const sr = ScrollReveal();
          sr.reveal('.back_top_con', {
            delay: 500,
            distance: '50px',
            duration: 1000,
            easing: 'ease-in-out',
            origin: 'bottom',
            rotate: {
              x: 100,
              y: 50,
              z: 70,
            },
          });
      }, []);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className='footer'>
            <div className="back_top_con">
                <div className='img_con' >
                    <img src={back_Top} alt="" onClick={scrollToTop} />
                    <small>To top</small>
                </div>
            </div>
            <div className="footer_content">
                <div className="big_col">
                    <h2>CONTACTS</h2>
                    <div className="content">
                        <img src={location_icon} alt="" />
                        <p>Plot 26 Channels Tv Avenue, Opic Ogun State</p>
                    </div>
                    <div className="content">
                        <img src={phone_icon} alt="Icon" />
                        <p><a href="tel:+2348038479946">+234 803 847 9946</a></p>
                        <p><a href="tel:+2348038479946">+234 803 847 9946</a></p>
                    </div>
                    <div className="content">
                        <img src={email_icon} alt="Icon" />
                        <p><a href="mailto:homefittingsltd@gmail.com">homefittingsltd@gmail.com</a></p>
                    </div>
                    <div className="content">
                        <img src={whatsapp_icon} alt="Icon" />
                        <p><a onClick={scrollToTop} style={{ textDecoration: "none" }} href="https://wa.link/ph3nic" className='link' target="_blank">+234 803 847 9946</a></p>
                    </div>
                </div>
                <div className="small_col">
                    <h2>QUICK LINKS</h2>
                    <div className="content">
                        <NavLink onClick={scrollToTop} style={{ textDecoration: "none" }} className='link' to="/">Home</NavLink>
                        <NavLink onClick={scrollToTop} style={{ textDecoration: "none" }} className='link' to="/about">About</NavLink>
                        <NavLink onClick={scrollToTop} style={{ textDecoration: "none" }} className='link' to="/project">Project</NavLink>
                        <a onClick={scrollToTop} style={{ textDecoration: "none" }} href="https://wa.link/ph3nic" className='link' target="_blank">Contact</a>
                    </div>
                </div>
                <div className="small_col">
                    <h2>SOCIAL MEDIA</h2>
                    <div className="content">
                        <a href="https://www.facebook.com/profile.php?id=61561737755645&mibextid=ZbWKwL" className="social_link" target="_blank" rel="noopener noreferrer">Facebook </a>
                        <a href="https://wa.link/ph3nic" className="social_link" target="_blank" rel="noopener noreferrer"> WhatsApp </a>
                        <a href="https://vm.tiktok.com/ZMrBqjwHY/" className="social_link" target="_blank" rel="noopener noreferrer"> Tiktok</a>
                        <a href="https://www.instagram.com/homefittings1?igsh=OW03dGtueGY0ZTA=" className="social_link" target="_blank" rel="noopener noreferrer"> Instagram</a>
                    </div>
                </div>
            </div>
            <p className='copyrighted'>Copyrighted &copy;  2024 HomeFittings </p>
        </div>
    )
}

export default Footer
