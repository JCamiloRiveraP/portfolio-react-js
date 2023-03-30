import React from 'react';
import "./header.css";
import HeaderSocials from './HeaderSocials';
import CTA from './CTA'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header id='house'>
     <div className="container header__container">
      <h5>Hola mi nombre es:</h5>
      <h1>Camilo Rivera</h1>
      <h5 className="text-light">Desarrollador Web / Diseñador Web</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="ME" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div> 
    </header>
  )
}

export default Header
