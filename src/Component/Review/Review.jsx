import React, { useEffect } from 'react'
import './Review.css'
import client_1 from '../Assets/client_1.jpeg';
import client_2 from '../Assets/client_2.jpeg';
import ScrollReveal from 'scrollreveal';

const Review = () => {
    let sign = '"'

    useEffect(()=>{
            ScrollReveal().reveal('.left', {
              delay: 500,
              distance: '50px',
              duration: 1000,
              easing: 'ease-in-out',
              origin: 'left',
            });
            
       },[]);

    useEffect(()=>{
            ScrollReveal().reveal('.right', {
              delay: 500,
              distance: '50px',
              duration: 2000,
              easing: 'ease-in-out',
              origin: 'right',
            });
            
       },[]);

    return (
        <div className='review'>
            <h1>Happy Clients</h1>
            <p>What Customers Say About Us</p>
            <div className="main_content">
                <div className="two_col left">
                    <img src={client_1} alt="IMG" />
                    <div className="text_all">
                        <h4>Tayo Adeniji</h4>
                        <p>Builder</p>
                        <h5> {sign} I bought some tiles and bathroom fittings for a project sometimes: April, 2024. Quite affordable and some of the tiles broke while they’re loading it and they replaced it for me. {sign}</h5>
                    </div>
                </div>
                <div className="two_col right">
                    <img src={client_2} alt="IMG" />
                    <div className="text_all">
                        <h4>Michael Omeihe</h4>
                        <p>Engineer</p>
                        <h5>{sign} I recently had the pleasure of tiling my entire home with beautiful Italian tiles, and I couldn't be happier with the results! From the living room and bedrooms to the kitchen and toilet, every space now exudes elegance and sophistication. The quality of the tiles is exceptional, adding a luxurious touch to my home that is both timeless and durable.
                            If you're considering new tiles for your home, I highly recommend <bold>HomeFittings</bold>. You won't be disappointed!

                            Best regards, {sign}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
