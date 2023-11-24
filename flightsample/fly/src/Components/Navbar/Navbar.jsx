import React from 'react'
import { useState } from 'react'

//import react icons
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

//import images 
import game from '../../assets/game1.jpg'
const Navbar = () => {

    //This code removes navbar from the screen
    const [active, setActive] = useState('navBarMenu')
    const showNavBar = ()=>{
        setActive('navBarMenu showNavBar')
    }

    const removeNavBar = ()=>{
        setActive('navBarMenu')
    }
  return (
    <div className='navBar flex'>
        <div className='navBarOne flex'>
            <div>
                <SiConsul className='icons'/>
            </div>

            <div className='none  flex'>
                <il className='flex' > <BsPhoneVibrate className='icons' /> Support</il>
                <li className='flex'> <AiOutlineGlobal className='icons'/> Langueges</li>
            </div>
 
            <div className='atb flex'>
                <span>Sign In</span>
                <span>Sign Out</span>
            </div>
        </div>

        <div className='navBarTwo flex'>
            <div className='logodiv'>
                <img src={game} className='logo'/>
            </div>

            <div className={active}>
                <ul className='menu flex'>
                    <li onClick={removeNavBar} className='listItem'>Home</li>
                    <li onClick={removeNavBar} className='listItem'>About</li>
                    <li onClick={removeNavBar} className='listItem'>Offers</li>
                    <li onClick={removeNavBar} className='listItem'>Seats</li>
                    <li onClick={removeNavBar} className='listItem'>Destinations</li>
                </ul>

                <button onClick={removeNavBar} className='btn flex btnOne'>
                    Contact
                </button>
            </div>

            <button className='btn flex btnTwo'>
                    Contact
                </button>

            <div onClick={showNavBar} className='toggleIcon'>
                <CgMenuGridO/>
            </div>
        </div>
    </div>
  )
}


export default Navbar
