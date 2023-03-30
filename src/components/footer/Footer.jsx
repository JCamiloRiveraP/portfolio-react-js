import React from 'react';
import "./footer.css";
import {AiOutlineGithub} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
   <footer>
    <a href="#house" className='footer__logo'>CAMILO RIVERA</a>
      <ul className='permalinks'>
        <li><a href="#house">Inicio</a> </li>
        <li><a href="#about">Sobre mí</a> </li>
        <li><a href="#experience">Experiencia</a> </li>
        <li><a href="#services">Servicios</a> </li>
        <li><a href="#portfolio">Portafolio</a> </li>
        <li><a href="#testimonials">Testimonios</a> </li>
        <li><a href="#contact">Contacto</a> </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com">< AiOutlineGithub/></a>
        <a href="https://instagram.com">< AiOutlineInstagram/></a>
        <a href="https://twitter.com">< AiOutlineTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Camilo Rivera. Todos los derechos reservados.</small>
      </div>

   </footer>
  )
}

export default Footer