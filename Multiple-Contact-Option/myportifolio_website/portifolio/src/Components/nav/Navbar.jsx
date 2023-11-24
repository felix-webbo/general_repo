import React from 'react'
import { useState } from 'react'
import './Navbar.css'

//import react icons here
import {AiOutlineHome} from 'react-icons/ai'
import {FcAbout} from 'react-icons/fc'
import {GiBookAura} from 'react-icons/gi'
import {MdHomeRepairService} from 'react-icons/md'
import {FaUser} from 'react-icons/fa'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
       <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a> 
       <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout/></a> 
       <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookAura/></a> 
       <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdHomeRepairService/></a> 
       <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FaUser/></a>  
    </nav>
  )
}

export default Navbar
