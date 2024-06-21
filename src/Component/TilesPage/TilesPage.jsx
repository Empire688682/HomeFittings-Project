import React from 'react'
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


const TilesPage = () => {
    return (
        <div className='tiles'>
            <h2>Tiles gallery</h2>
            <h1>Gallery</h1>
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
            <div className="btn_con">
                <button className='btn'>
                    <a href="https://wa.link/z25hyo" target="_blank">Contact us</a>
                </button>
            </div>
        </div>
    )
}

export default TilesPage
