import React from 'react';
import './scrollup.css';
import {BsArrowUpCircleFill} from 'react-icons/bs'

export const ScrollUp = () => {
    window.addEventListener("scroll", function(){
        const scrollUp = this.document.querySelector(".scrollup");
        if (this.scrollY >=560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll");
    });
  return (
    <a href="#house" className="scrollup">
        <i className="uil scrollup-icon"><BsArrowUpCircleFill/></i>
    </a>
  )
}


export default ScrollUp