import React, { useEffect, useState } from 'react'
import './SanitaryFittingsPage.css';
import image_1 from '../Assets/sanitry_1.png'
import image_2 from '../Assets/sanitry_2.png'
import image_3 from '../Assets/sanitry_3.png'
import image_4 from '../Assets/sanitry_4.png'
import image_5 from '../Assets/sanitry_5.png'
import image_6 from '../Assets/sanitry_6.png'
import image_7 from '../Assets/sanitry_7.png'
import image_8 from '../Assets/sanitry_8.png'
import image_9 from '../Assets/sanitry_9.png'
import image_10 from '../Assets/sanitry_10.png'
import image_11 from '../Assets/sanitry_11.png'
import image_12 from '../Assets/sanitry_12.png'
import image_13 from '../Assets/sanitry_13.png'
import image_14 from '../Assets/sanitry_14.png'
import image_15 from '../Assets/sanitry_15.png'
import image_16 from '../Assets/sanitry_16.png'
import image_17 from '../Assets/sanitry_17.png'
import image_18 from '../Assets/sanitry_18.jpeg'
import image_19 from '../Assets/sanitry_19.jpeg'
import image_20 from '../Assets/sanitry_20.jpeg'
import image_21 from '../Assets/sanitry_21.jpeg'
import image_22 from '../Assets/sanitry_22.jpeg'
import image_23 from '../Assets/sanitry_23.jpeg'
import image_24 from '../Assets/sanitry_24.jpeg'
import image_25 from '../Assets/sanitry_25.jpeg'
import image_26 from '../Assets/sanitry_26.jpeg'
import whatsapp_Icon from '../Assets/whatsapp_icon_colored.png';

const SanitaryFittingsPage = () => {
    const [screenDown, setScreenDown] = useState(false);
    const showContact = () => {
        if (window.scrollY > 500) {
            setScreenDown(true);
        } else {
            setScreenDown(false);
        }
    };

    useEffect(() => {
        // Add event listener for scroll events
        window.addEventListener('scroll', showContact);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', showContact);
        };
    }, []); 
    return (
        <div className='sanitary_fittings'>
            <h2>Sanitary fittings</h2>
            <h1>Gallery</h1>
            <p>Discover our comprehensive range of sanitary ware, designed to enhance every bathroom space. Our selection includes WC units, taps, shower mirrors, basins, sinks, bathtubs, and Jacuzzis. Each product is crafted to deliver exceptional quality and functionality, ensuring a perfect blend of style and convenience for your home. Explore our offerings to find the ideal fixtures for your bathroom</p>
            <div className="sanitary_fittings_con">
            <div className="four_col">
                    <img src={image_6} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_3} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_4} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_5} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_7} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_8} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_9} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_10} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_11} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_14} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_15} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_16} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_17} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_1} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_2} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_18} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_19} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_20} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_21} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_22} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_23} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_24} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_25} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_26} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_12} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_13} alt="IMG" />
                </div>
            </div>
            {
                screenDown? <div className="btn_con">
                <button className='btn'>
                    <a href="https://wa.link/ph3nic" target="_blank">
                        <img src={whatsapp_Icon} alt="" />
                        Contact us
                    </a>
                </button>
            </div>:null
            }
        </div>
    )
}

export default SanitaryFittingsPage
