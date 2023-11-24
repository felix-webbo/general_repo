import React from 'react'
import './Service.css'

import Hr from '../Hr'

import {GiCheckMark} from 'react-icons/gi'
const Service = () => {
  return (
    <>
    <section id='services'>
      <h5>Services I Offer</h5>
      <h2>Services</h2>

      <div className='container service_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Building and iterating wireframes</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Interpreting quantitave and qualitative data</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Determining the Information Architecture of a Digital Product</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Analysing design and testing results</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Branding / Keeping customer updated</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Designing User interface and navigation menus</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Troubleshooting problems with the performance or user experience</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Conducting website testing </p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Creating and updating website content</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Maintaining and updating websites</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Conceptualize original website design ideas that brings simplicity and user friendly to complex roadblocks</p>
            </li>
          </ul>
        </article>

        <article className='service'>
          <div className='service_head'>
            <h3>Database Administration </h3>
          </div>
          <ul className='service_list'>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Managing  data security and privacy</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Improving query processing performance</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Managign data integrity</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Database Recovery and Data back up</p>
            </li>

            <li>
              <GiCheckMark className='service_list-icon'/>
              <p>Tuning database performance and selection of hardware and software</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
    <Hr/>
    </>
  )
}

export default Service
