import React, { useState, useEffect } from 'react'
import './DoorsPage.css';
import image_1 from '../Assets/door_1.png';
import image_2 from '../Assets/door_2.png';
import image_3 from '../Assets/door_3.png';
import image_4 from '../Assets/door_4.png';
import image_5 from '../Assets/door_5.png';
import image_6 from '../Assets/door_6.png';
import image_7 from '../Assets/door_7.png';
import image_8 from '../Assets/door_8.png';
import image_9 from '../Assets/door_9.png';
import image_10 from '../Assets/door_10.png';
import image_11 from '../Assets/door_11.png';
import image_12 from '../Assets/door_12.png';
import image_13 from '../Assets/door_13.png';
import image_14 from '../Assets/door_14.png';
import image_15 from '../Assets/door_15.png';
import image_16 from '../Assets/door_16.png';
import image_17 from '../Assets/door_17.png';
import image_18 from '../Assets/door_18.png';
import image_19 from '../Assets/door_19.png';
import image_20 from '../Assets/door_20.png';
import image_21 from '../Assets/door_21.png';
import image_22 from '../Assets/door_22.png';
import image_23 from '../Assets/door_23.png';
import image_24 from '../Assets/door_24.png';
import image_25 from '../Assets/door_25.png';
import whatsapp_Icon from '../Assets/whatsapp_icon_colored.png';

const DoorsPage = () => {

    const [screenDown, setScreenDown] = useState(false)
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
    }, []); // Empty dependency array to ensure this runs once
    return (
        <div className='doors'>
            <h2>Doors gallery</h2>
            <h1>Gallery</h1>
            <p>Home Fittings offers a wide variety of doors to complement every style and requirement. Our selection includes doors designed for durability, security, and aesthetic appeal. Whether you're looking for classic, modern, or custom designs, we have the perfect door to enhance your home's entryways and interiors. Explore our range to find the ideal door solutions for your home.</p>
            <div className="doors_con">
                <div className="four_col">
                    <img src={image_25} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_24} alt="IMG" />
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
                    <img src={image_6} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_7} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_8} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_11} alt="IMG" />
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
                    <img src={image_22} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_21} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_16} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_17} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_19} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_14} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_20} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_15} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_18} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_9} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_2} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image_1} alt="IMG" />
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

export default DoorsPage
