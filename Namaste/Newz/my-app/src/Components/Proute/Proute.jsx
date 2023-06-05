import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
const Proute = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default Proute