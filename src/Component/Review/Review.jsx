import React from 'react'
import './Review.css'
import client_1 from '../Assets/client_1.png'
import client_2 from '../Assets/client_2.png'

const Review = () => {
    return (
        <div className='review'>
            <h1>Happy Client</h1>
            <p>Turpis facilisis tempor pulvinar in lobortis ornare magna.</p>
            <div className="main_content">
                <div className="two_col">
                    <img src={client_1} alt="IMG" />
                    <div className="text_all">
                        <h4>Simba Rosie</h4>
                        <p>CEO</p>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit sit obcaecati a, architecto odit et. Neque, nisi consectetur exercitationem similique a illo dolore provident explicabo sed, inventore quia aliquid!</h5>
                    </div>
                </div>
                <div className="two_col">
                    <img src={client_1} alt="IMG" />
                    <div className="text_all">
                        <h4>Brooklyn Simmons</h4>
                        <p>Engineer</p>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi fugit sit obcaecati a, architecto odit et. Neque, nisi consectetur exercitationem similique a illo dolore provident explicabo sed, inventore quia aliquid!</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review
