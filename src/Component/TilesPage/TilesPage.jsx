import React from 'react'
import './TilesPage.css';
import image from '../Assets/IMG_5.png'

const TilesPage = () => {
    return (
        <div className='tiles'>
            <h2>Tiles gallery</h2>
            <h1>Gallery</h1>
            <div className="tiles_con">
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
                </div>
                <div className="four_col">
                    <img src={image} alt="IMG" />
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
