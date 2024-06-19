import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Project from './Component/Project/Project'
import Footer from './Component/Footer/Footer'
import SanitaryFittingsPage from './Component/SanitaryFittingsPage/SanitaryFittingsPage'
import RealEstatePage from './Component/RealEstatePage/RealEstatePage'
import DoorsPage from './Component/DoorsPage/DoorsPage'
import TilesPage from './Component/TilesPage/TilesPage'

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/Sgallery' element={<SanitaryFittingsPage/>}/>
          <Route path='/Rgallery' element={<RealEstatePage/>}/>
          <Route path='/Dgallery' element={<DoorsPage/>}/>
          <Route path='/Tgallery' element={<TilesPage/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App
