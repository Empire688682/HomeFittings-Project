import React, { useEffect, useState } from 'react'
import './TilesPage.css';
import image_1 from '../Assets/tile_1.png';
import image_2 from '../Assets/tile_2.png';
import image_3 from '../Assets/tile_3.png';
import image_4 from '../Assets/tile_4.png';
import image_5 from '../Assets/tile_5.png';
import image_6 from '../Assets/tile_6.png';
import image_7 from '../Assets/tile_7.png';
import image_8 from '../Assets/tile_8.png';
import image_9 from '../Assets/tile_9.png';
import image_13 from '../Assets/tile_13.png';
import image_10 from '../Assets/tile_10.png';
import image_12 from '../Assets/tile_12.png';
import image_14 from '../Assets/tile_14.png';
import image_15 from '../Assets/tile_15.png';
import image_17 from '../Assets/tile_17.png';
import image_11 from '../Assets/tile_11.png';
import image_16 from '../Assets/tile_16.png';
import whatsapp_Icon from '../Assets/whatsapp_icon_colored.png';


const TilesPage = () => {
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
        <div className='tiles'>
            <h2>Tiles gallery</h2>
            <h1>Gallery</h1>
            <p>Explore our extensive selection of tiles, featuring both ceramic and porcelain options. Available in matt and polished finishes, our tiles are designed to suit a variety of styles and preferences. Whether you're looking for durability or aesthetic appeal, our range provides the perfect solution for your flooring and wall needs.</p>
            <div className="tiles_con">
            <div className="four_col">
                    <img src={image_17} alt="IMG" />
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

export default TilesPage
