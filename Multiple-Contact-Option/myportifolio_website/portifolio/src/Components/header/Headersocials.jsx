import React from 'react'

// ===import react inons=====
import {AiOutlineGithub} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const Headersocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://www.linkedin.com/notifications/?filter=all' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/felix-webbo?tab=repositories' target='_blank'><AiOutlineGithub/></a>
      <a href='https://dribbble.com/Felaferer?onboarding=true&designer=true' target='_blank'><FiDribbble/></a>
    </div>
  )
}

export default Headersocials
