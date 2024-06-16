import React from 'react'
import './About.css';
import about_Img from '../Assets/About_Img.png'

const About = () => {
  return (
    <div className='about'>
      <div className="left_colum">
        <img src={about_Img} alt="IMG" />
      </div>
      <div className="right_colum">
        <h1>We offer the best quality fittings</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat neque atque, qui et mollitia soluta ratione officia delectus tempora, incidunt facilis quibusdam reiciendis illum accusantium, molestiae eius. Cupiditate, libero amet!</p>
        <div className="experience_all">
          <div className="three_col">
            <h4>Happy client</h4>
            <h2>34+</h2>
          </div>
          <div className="three_col">
            <h4>Happy client</h4>
            <h2>20y</h2>
          </div>
          <div className="three_col">
            <h4>Happy client</h4>
            <h2>12</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
