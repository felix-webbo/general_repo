import React from 'react'
import webbo2 from '../../assets/webbo2.jpg'
import './About.css'
import '../../index.css'

import {FaAward} from 'react-icons/fa'
import {AiOutlineUser} from 'react-icons/ai'
import {BsFolder2Open} from 'react-icons/bs'

import Hr from '../Hr'

const About = () => {
  return (
    <>
    <section id='about'>
        <h5> Get To Know </h5>
        <h2>About Me</h2>

        <div className='container about_container'>
          <div className='about_me'>
              <div className='about__me-image'>
                <img src={webbo2} alt='' className='image2'/>
              </div>
          </div>

          <div className='about_content'>
            <div className='about-cards'>
              <article className='about-card'>
                 <span className='about-icon'><FaAward/></span>
                 <h5>Experience</h5>
                 <small>2+ yeaars working</small>
              </article>

              <article className='about-card'>
                 <span className='about-icon'><AiOutlineUser/></span>
                 <h5>Clients</h5>
                 <small>20+ worldwide</small>
              </article>

              <article className='about-card'>
                 <span className='about-icon'><BsFolder2Open/></span>
                 <h5>Projects</h5>
                 <small>5+ Completed</small>
              </article>
            </div>

            <p>
              I am an Undergradute student still  pursuing Bachelor of Science in Applied 
              Physics and computer Science in Multimedia Universit of Kenya. Am a very  positive and Ambitious person, perhaps, am competent in my 
              work. The past years of study, I surveyed various fields related to my specialisation and found an interest in programming.
              Currently am into web development. DO YOU WANT A PERSONNAL OR COMPANY WEBSITE, inform me by clicking the button below! Thank you ..
            </p>

            <a href='#contact' className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
    </section>
    <Hr/>
    </>
  )
}

export default About
