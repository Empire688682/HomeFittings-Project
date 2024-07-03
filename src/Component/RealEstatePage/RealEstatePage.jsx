import React, { useEffect, useState } from 'react'
import './RealEstatePage.css';
import image_1 from '../Assets/property_1.png';
import image_2 from '../Assets/property_2.png';
import image_3 from '../Assets/property_3.png';
import image_4 from '../Assets/property_4.png';
import image_5 from '../Assets/property_5.png';
import image_6 from '../Assets/property_6.png';
import image_7 from '../Assets/property_7.png';
import image_8 from '../Assets/property_8.png';
import image_9 from '../Assets/property_9.png';
import image_10 from '../Assets/property_10.png';
import image_11 from '../Assets/property_11.png';
import image_12 from '../Assets/property_12.png';
import image_13 from '../Assets/property_13.png';
import image_14 from '../Assets/property_14.png';
import image_15 from '../Assets/property_15.png';
import image_16 from '../Assets/property_16.png';
import image_17 from '../Assets/property_17.png';
import whatsapp_Icon from '../Assets/whatsapp_icon_colored.png';

const RealEstatePage = () => {
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
        <div className='real_estate'>
            <h2>Real estate gallery</h2>
            <h1>Gallery</h1>
            <p>In addition to our home improvement products, Home Fittings offers a dedicated real estate section. We provide comprehensive services for buying and renting properties, catering to all your housing needs. Whether you're looking for your dream home or a rental property, our expert team is here to assist you in finding the perfect place. Trust Home Fittings to deliver quality and satisfaction in every real estate transaction.</p>
            <div className="real_estate_con">
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
                    <img src={image_6} alt="IMG" />
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
                    <img src={image_12} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_13} alt="IMG" />
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

export default RealEstatePage
