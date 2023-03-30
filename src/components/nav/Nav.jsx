import React from 'react';
import "./nav.css";
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAstronaut} from 'react-icons/fa'
import {MdWorkOutline} from 'react-icons/md'
import {MdOutlineDesignServices} from 'react-icons/md'
import {TiContacts} from 'react-icons/ti'
import{useState} from 'react'


const Nav = () => {
  const [activenav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#house" onClick={()=>setActiveNav('#house')} className={activenav === '#house' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')}  className={activenav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')}  className={activenav === '#experience' ? 'active' : ''}><MdWorkOutline/></a>
      <a href="#services" onClick={()=>setActiveNav('#services')}  className={activenav === '#services' ? 'active' : ''}><MdOutlineDesignServices/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activenav === '#contact' ? 'active' : ''}><TiContacts/></a>
    </nav>
  )
}

export default Nav