import React, { useState } from 'react';
import "./services.css";
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {FaLaptopCode} from 'react-icons/fa';
import {MdOutlineDesignServices} from 'react-icons/md';
import {BiBookContent} from 'react-icons/bi';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {AiOutlineSwapRight} from 'react-icons/ai';




const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className='services section' id='services'>
          <h5> Que te ofrecemos </h5>
          <h2>Servicios</h2>

      <div className="services__container container grid">
          <div className="services__content">
            <div>  
              <i className="uil uil-web-grid services__icon"><FaLaptopCode/></i>
              <h3 className="services__title"> Desarrollo <br/> Web </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(1)}>Ver más <i className="uil uil-arrow-right services__button-icon"><AiOutlineSwapRight/></i></span>


            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><AiOutlineCloseCircle /></i>
                <h3 className="services__modal-title">Desarrollo web</h3>
                
                <p className="services__modal-description">Servicios con mas de 2 años de experiencia. Proporcionamos un trabajo de calidad para nuestros clientes</p>
                <ul className="services__modal-services grid">
                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Desarrollo interfaz de usuario</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Desarrollo website</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Creación de interacción para elementos UX</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Posicionamiento de la marca de tu empresa </p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Desarrollo interfaz de usuario</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Diseño y maquetación de productos para tu negocio</p></li>
                </ul>
              </div>
            </div>
          </div>{/* FIN MODAL 1 */}

        <div className="services__content">
            <div>
              <i className="uil uil-edit services__icon"><MdOutlineDesignServices/></i>
              <h3 className="services__title">Diseñador <br/> UX / UI</h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(2)}>Ver más<i className="uil uil-arrow-right services__button-icon"><AiOutlineSwapRight/></i></span>


            <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><AiOutlineCloseCircle /></i>
                <h3 className="services__modal-title"> Diseñador UX / UI </h3>
                <p className="services__modal-description">Servicios con mas de 2 años de experiencia. Proporcionamos un trabajo de calidad para nuestros clientes</p>
                <ul className="services__modal-services grid">
                    <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                    <p className="services__modal-info">Desarrollo interfaz de usuario</p></li>

                    <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                    <p className="services__modal-info">Desarrollo website</p></li>

                    <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                    <p className="services__modal-info">Creación de interacción para elementos UX</p></li>

                    <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                    <p className="services__modal-info">Posicionamiento de la marca de tu empresa </p></li>

                    <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                    <p className="services__modal-info">Desarrollo interfaz de usuario</p></li>

                    <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                    <p className="services__modal-info">Diseño y maquetación de productos para tu negocio</p></li>
                </ul>
              </div>
            </div>
          </div>{/* FIN MODAL 2 */}

        <div className="services__content">
            <div>
              <i className="uil uil- services__icon"><BiBookContent/></i>
              <h3 className="services__title">Creación de <br/> Contenido </h3>
            </div>

            <span className="services__button" onClick={() => toggleTab(3)}>Ver más <i className="uil uil-arrow-right services__button-icon"><AiOutlineSwapRight/></i></span>


            <div className={toggleState === 3? "services__modal active-modal" : "services__modal"}>
              <div className="services__modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"><AiOutlineCloseCircle /></i>
                <h3 className="services__modal-title">Creación de contenido</h3>
                <p className="services__modal-description">Servicios con mas de 2 años de experiencia. Proporcionamos un trabajo de calidad para nuestros clientes</p>
                <ul className="services__modal-services grid">
                
                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Desarrollo website</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Creación de interacción para elementos UX</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Posicionamiento de la marca de tu empresa </p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Desarrollo interfaz de usuario</p></li>

                  <li className="services__modal-service"><i className="uil uil-check-circle services__modal-icon"><BsFillPatchCheckFill/></i>
                  <p className="services__modal-info">Diseño y maquetación de productos para tu negocio</p></li>
                </ul>
              </div>
            </div>
          </div>{/* FIN MODAL 3 */}
      </div>
    </section>
  );
};


export default Services