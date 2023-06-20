import React from 'react'

import Header from '../components/header/Header'
import Navbar from '../components/navbar/Navbar'
import About from '../components/about/About'
import Experience from '../components/experience/Experience'
import Services from '../components/services/Services'
import Portfolio from '../components/portfolio/Portfolio'
import Contact from '../components/contact/Contact'
import Testimonial from '../components/testimonial/Testimonial'
import Footer from '../components/footer/Footer'
import Github from '../components/github/Github'
const App = () => {
  return (
    <div id='home' className='nav-link home'>
      <Header/> 
      <Navbar/>
      <About/>
      <Experience/>
      <Github/>
      <Services/>
     
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
      </div>
  )
}
export default App
