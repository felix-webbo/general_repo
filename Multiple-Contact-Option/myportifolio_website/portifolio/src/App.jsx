import React from 'react'
import Header from './Components/header/Header'
import Navbar from './Components/nav/Navbar'
import About from './Components/about/About'
import Experience from './Components/experience/Experience'
import Service from './Components/service/Service'
import Portfolio from './Components/portifolio/Portfolio'
import Testimonial from './Components/testimonials/Testimonial'
import Contact from './Components/contact/Contact'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header/> 
      <Navbar/>
      <About/>
      <Experience/>
      <Service/>
      <Portfolio/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
