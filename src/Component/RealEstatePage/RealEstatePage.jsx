import React from 'react'
import './RealEstatePage.css';
import image from '../Assets/property_2.png'

const RealEstatePage = () => {
    return (
        <div className='real_estate'>
            <h2>Real estate gallery</h2>
            <h1>Gallery</h1>
            <div className="real_estate_con">
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

export default RealEstatePage
