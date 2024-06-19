import React from 'react'
import './SanitaryFittingsPage.css';
import image from '../Assets/IMG_4.png'

const SanitaryFittingsPage = () => {
    return (
        <div className='sanitary_fittings'>
            <h2>Sanitary fittings</h2>
            <h1>Gallery</h1>
            <div className="sanitary_fittings_con">
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

export default SanitaryFittingsPage
