import React, { useEffect } from 'react'
import './Review.css'
import client_1 from '../Assets/review_1.jpg';
import client_2 from '../Assets/review_2.jpg';
import ScrollReveal from 'scrollreveal';

const Review = () => {
    let sign = '"'

    useEffect(()=>{
            ScrollReveal().reveal('.left', {
              delay: 500,
              distance: '50px',
              duration: 2000,
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
                        <h4>Sir Cletus</h4>
                        <p>Builder</p>
                        <h5> {sign} HomeFittings offers the best in toilet fittings, tiles, and more. Their quality, variety, and service are unmatched, ensuring satisfaction with every purchase. For all your bathroom needs, HomeFittings is the top choice. {sign}</h5>
                    </div>
                </div>
                <div className="two_col right">
                    <img src={client_2} alt="IMG" />
                    <div className="text_all">
                        <h4>Bandy Rossie</h4>
                        <p>Engineer</p>
                        <h5>{sign} HomeFittings is exceptional in providing top-notch toilet fittings, tiles, and efficient real estate management. Their diverse selection, superior quality, and outstanding service guarantee complete satisfaction. {sign}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
