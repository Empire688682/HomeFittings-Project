import React from 'react'
import './Home.css';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Project from '../Project/Project';
import Review from '../Review/Review';

const Home = () => {
  return (
    <div>
      <Hero  />
      <About />
      <Project />
      <Review />
    </div>
  )
}

export default Home
