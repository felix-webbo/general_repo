import React from 'react'
import './Experience.css';

//import react icons here
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {BiLogoCss3} from 'react-icons/bi'
import {TbBrandJavascript} from 'react-icons/tb'
import {BsBootstrapFill} from 'react-icons/bs'
import {SiTailwindcss} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {SiVite} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {TbBrandMysql} from 'react-icons/tb'
import {SiMongodb} from 'react-icons/si'

import Hr from '../Hr'


const Experience = () => {
  return (
    <>
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'>
          <h3>Frontend development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><AiFillHtml5/></span>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><BiLogoCss3/></span>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><TbBrandJavascript/></span>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><BsBootstrapFill/></span>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><SiTailwindcss/></span>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><FaReact/></span>React</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details_icon'/>
              <div>
                <h4><span><SiVite/></span>Vite</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className='experience_backend'>
        <h3>Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4><span><FaNodeJs/></span>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4><span><SiMongodb/></span>MomgoDB</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4><span><SiPhp/></span>PHP</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>

          <article className='experience_details'>
            <BsPatchCheckFill className='experience_details_icon'/>
            <div>
              <h4><span><TbBrandMysql/></span>Mysql</h4>
              <small className='text-light'>Basic</small>
            </div>
          </article>

        </div>
        </div>
      </div>
    </section>
    <Hr/>
    </>
  )
}

export default Experience
