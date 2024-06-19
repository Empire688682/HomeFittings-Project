import React from 'react'
import './DoorsPage.css';
import image from '../Assets/IMG_2.png'

const DoorsPage = () => {
    return (
        <div className='doors'>
            <h2>Doors gallery</h2>
            <h1>Gallery</h1>
            <div className="doors_con">
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

export default DoorsPage
