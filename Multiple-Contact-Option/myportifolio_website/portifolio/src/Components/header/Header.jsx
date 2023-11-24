import React from 'react'
import CTA from './CTA'
import webbo from '../../assets/webbo.jpg'
import './Header.css'
import '../../../src/index.css'
import Headersocials from './Headersocials'
import {MdWavingHand} from 'react-icons/md'
import Hr from '../Hr'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Header = () => {
  const [textArray] = useTypewriter({
     words : ["I am a Fullstack...", "Welcome to my portfolio website...", "Do you want a website... ?", "Let's Talk...", "Send a message via the social media below for more info....", "Thank you!"],
     loop: {},
     typeSpeed: 120,
     deleteSpeed: 50,
     
  });

  return ( 
    <header>
        <div className='container header-container'>
            <h3>Hi!!! <span><MdWavingHand className='hand-icon'/></span>I am</h3>
            <h1>WEBBO FELIX  </h1>
            {''}
            <span style={{margin: '5px', fontWeight: 'bold', color: 'lightblue', fontStyle: 'italic', fontSize: '1.5rem'}}>
              {textArray}
            </span>
            <span style={{color: 'gold', fontWeight: '900', fontStyle: 'italic', fontSize: '2rem'}}>
              <Cursor cursorStyle='|'/>
            </span>
            <CTA/>

            <div className='header-items'>
              <Headersocials/>

              <div className='me'>
                  <img src={webbo} alt='' className='image1'/>
              </div>

              <a href='#contact' className='scroll_down'>Scroll Down</a>
            </div>
        </div>
        <Hr/>
    </header>
    
  )
}

export default Header
