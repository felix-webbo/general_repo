import React from 'react'
import './Testimonial.css'

import Hr from '../Hr'

import { TestimonialData } from '../TestimonialData'


import  { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonial = () => {
  return (
    <>
    <section id='testimonial'>
      <h5>review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonial_container'
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      modules={[Pagination]}
      id='mySwiper'>
        {
            TestimonialData.map(({avatar, name, review}, index) => {
                return(
                    <SwiperSlide key={index} className='testimonial'>
                        <div className='client_avatar'>
                            <img src={avatar} alt=''/>
                        </div>
                        <h5 className='client_name'>{name}</h5>
                        <small className='client_review'>
                        {review}
                        </small>
                    </SwiperSlide>
                )
            })
        }
      </Swiper>
    </section>
    <Hr/>
    </>
  )
}

export default Testimonial
