import React from 'react'
import './Footer.css'

import {BsFacebook} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TiSocialLinkedinCircular} from 'react-icons/ti'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>WEBBO</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href='https://www.facebook.com/' target='_black'><BsFacebook className=''/></a>
        <a href='https://www.linkedin.com/notifications/?filter=all' target='_black'><TiSocialLinkedinCircular/></a>
        <a href='https://twitter.com/home' target='_black'><AiFillTwitterCircle/></a>
      </div>

      <div className='footer_copyright'>
        <marquee><span>&copy;</span><small>All About Webbo Felix  info: <span>Whatsapp :</span> 0113323746 | <span>Email :</span> felixwebbo.java@gmail.com | <span>Facebook :</span> Felafere Zakwebbo</small></marquee>
      </div>
    </footer>
  )
}

export default Footer
