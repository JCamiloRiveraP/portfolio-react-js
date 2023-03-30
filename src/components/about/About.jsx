import React from "react";
import "./about.css";
import ME from '../../assets/me-about.jpg'
import {BiCodeAlt} from 'react-icons/bi'
import {FiUsers} from 'react-icons/fi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {TiPlus} from 'react-icons/ti'

const About = () => {
    return (

        <section id="about">
            <h2> Sobre mí </h2>
            <h5> Conoceme </h5>
            

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="imagen sobre mi" />
                </div>
            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className="about__card">
                        <BiCodeAlt className="about__icon"/>
                        <h5>Experiencia</h5>
                        <small> <TiPlus/>2 años Desarrollando</small>
                    </article>

                    <article className="about__card">
                        <FiUsers className="about__icon"/>
                        <h5>Clientes</h5>
                        <small><TiPlus/>2 Años Trabajando</small>
                    </article>

                    <article className="about__card">
                        <AiOutlineFundProjectionScreen className="about__icon"/>
                        <h5>Proyectos</h5>
                        <small><TiPlus/>15 Completados</small>
                    </article>
                </div>
                <p>¡Hola! Mi nombre es Camilo, soy desarrollador y diseñador web, Mi pasion por el desarrollo empezo desde el 2017 creando proyectos pequeños con lenguajes como C# y JS, uno de mis hobbies es crear cosas nuevas e innovadoras para una variedad de clientes enfocado al desarrollo web.
                He tenido el privilegio de trabajar en agencias de marketing y desarrollo el cual me ayudaron a darle un enfoque a mi carrera como desarrollador y diseñador web.
                Me apasiona ser creativo y organizado en mis proyectos de desarrollo y diseño web.</p>
                <a href="#contact" className="btn btn-primary">Charlamos</a>
            </div>
        </div>
        </section> 
    )
}


export default About