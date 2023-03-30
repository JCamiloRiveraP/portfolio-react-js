import React from "react";
import "./contact.css";
import {HiOutlineMail} from 'react-icons/hi';
import {BiPhoneCall} from 'react-icons/bi';
import {FaDev} from 'react-icons/fa'
import {AiOutlineSwapRight} from 'react-icons/ai';


const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h5>Ponte en contacto</h5>
            <h2>Contato</h2>
        
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Charlemos</h3>

                    <div className="contact__card">
                            <i className="bx contact__card-icon">< HiOutlineMail/></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">camilorivera@camilorivera.co</span>
                            <a href="mailto:camilorivera@camilorivera.co" className="contact__button">Escribame <i className="bx contact__button-icon">< AiOutlineSwapRight/></i></a>
                    </div>
                    <div className="contact__card">
                            <i className="bx bx contact__card-icon">< BiPhoneCall/></i>
                            <h3 className="contact__card-title">Teléfono</h3>
                            <span className="contact__card-data">318 851 5737</span>
                            <a href="tel:+573188515737" className="contact__button">Escribame <i className="bx contact__button-icon"></i>< AiOutlineSwapRight/></a>
                    </div>
                    <div className="contact__card">
                            <i className="bx bx contact__card-icon">< FaDev/></i>
                            <h3 className="contact__card-title">Camilo Rivera</h3>
                            <span className="contact__card-data">Desarrollador Web</span>
                    </div>
                </div>

                <div className="contact-content">
                    <h3 className="contact__title">¿Quieres empezar tu próximo proyecto digital?</h3>
                
                <form action="" className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Nombre</label>
                        <input type="text" name="nombre" className="contact__form-input" placeholder="Escriba su nombre"/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Email</label>
                        <input type="email" name="email" className="contact__form-input" placeholder="Escriba su email"/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Proyecto</label>
                        <textarea name="proyecto" cols="30" rows="10" className="contact__form-input" placeholder="Escriba su proyecto"></textarea>
                    </div>

                    <button className="button button--flex">Enviar
                    <svg
                  class="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--color-primary)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--color-primary)"
                  ></path>
                </svg>
                        </button>
                </form>
                </div>
            </div>
        </section>


        // <section id="contact">
        //     <h5>Ponte en contacto</h5>
        //     <h2>Hablemos</h2>

        //     <div className="container contact__container">
        //         <div className="contact__options">
        //                 <article className="contact__option">
        //                     < HiOutlineMail className="contact__option-icon"/>
        //                     <h4>Email</h4>
        //                     <h5>camilorivera@camilorivera.co</h5>
        //                     <a href="mailto:camilorivera@camilorivera.co" target="_black" rel="noreferrer">Enviar Mensaje</a>
        //                 </article>

        //                 <article className="contact__option">
        //                     < BiPhoneCall className="contact__option-icon"/>
        //                     <h4>Teléfono</h4>
        //                     <h5>318 851 5737</h5>
        //                     <a href="tel:+573188515737" target="_black" rel="noreferrer">Hablemos</a>
        //                 </article>

        //                 <article className="contact__option">
        //                     < FaDev className="contact__option-icon"/>
        //                     <h4>CAMILO RIVERA</h4>
        //                     <h5>Desarrollador Web</h5>
                           
        //                 </article>
        //             </div>
        //         {/*FINAL OPCIONES DE CONTACTO */}
        //             <form action="">
        //                 <input type="text" name='nombre' placeholder='Nombre Completo' required />
        //                 <input type="email" name='email' placeholder='Email' required />
        //                 <input type="text" name='asunto' placeholder='Asunto' required/>
        //                 <textarea name="mensaje" rows="7" placeholder='Mensaje' required ></textarea>
        //                 <button type='submit' className="btn btn-primary">Enviar Mensaje</button>
        //             </form>
        //     </div>
        // </section>
    )
}


export default Contact