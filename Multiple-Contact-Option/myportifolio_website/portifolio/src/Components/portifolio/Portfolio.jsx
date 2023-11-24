import React from 'react'
import './Portfolio.css'

import Hr from '../Hr'
 
//import the images
import {Data} from '../Data'

const Portfolio = () => {

  return (
    <>
    <section id='portfolio'>
        <h5>My recent Work</h5>
        <h2>Portfolio</h2>

        <div className='container portfolio_container'>
           {
            Data.map(({id, image, title, github, demo}) => {
                return(
                    <article key={id} className='portfolio_item'>  
                    <div className='portfolio_item-image'>
                        <img src={image} alt=''/>
                    </div>
                    <h3>{title}</h3>
                    <div className='portfolio_item-cta'>
                        <a href={github} target='_blank' className='btn'>Github</a>
                        <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
                    </div>
                </article>
                )
            })
           }
        </div>
      
    </section>
    <Hr/>
    </>
  )
}

export default Portfolio
