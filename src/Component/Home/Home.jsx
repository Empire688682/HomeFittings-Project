import React from 'react'
import './Home.css';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Project from '../Project/Project';
import OurRealEstate from '../OurRealEstate/OurRealEstate';
import Review from '../Review/Review';
import Distributor from '../GoldenDoors/GoldenDoors';
import ViewTiles from '../ViewTiles/ViewTiles';

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
