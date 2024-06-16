import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home/Home'
import About from './Component/About/About'
import Project from './Component/Project/Project'
import Contact from './Component/Contact/Contact'

const App = () => {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default App
