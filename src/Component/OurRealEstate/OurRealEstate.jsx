import React from 'react'
import './OurRealEstate.css';
import property_1 from '../Assets/property_1.png'
import property_2 from '../Assets/property_2.png'
import arrow_icon from '../Assets/right-arrow.png'
import { NavLink } from 'react-router-dom';

const OurRealEstate = () => {
    return (
        <div className='our_real_estate'>
            <h1>Our Real Estate development in Nigeria</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique ratione, et, nostrum facere reprehenderit nesciunt accusantium, amet itaque dolorum sit nam eum molestias ipsum officia! Soluta alias commodi vel.</p>
            <div className="main_content">
                <div className="two_col">
                    <img src={property_1} alt="IMG" />
                    <div className="overlay">
                        <h2>Land and property sales</h2>
                    </div>
                </div>
                <div className="two_col">
                    <img src={property_2} alt="IMG" />
                    <div className="overlay">
                        <h2>Land and property sales</h2>
                    </div>
                </div>
            </div>
            <div className="btn_con">
                <button className='btn'>
                    <NavLink style={{ textDecoration: "none" }} className='btn' to="/Rgallery">
                        All Properties
                        <img src={arrow_icon} alt="" />
                    </NavLink>
                </button>
            </div>
        </div>
    )
}

export default OurRealEstate
