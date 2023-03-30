import React from "react";
import "./experience.css";
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {TbBrandJavascript} from 'react-icons/tb';
import {FaBootstrap} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {FaPhp} from 'react-icons/fa';
import {SiVisualstudiocode} from 'react-icons/si';
import {SiMysql} from 'react-icons/si';
import {SiMicrosoftsqlserver} from 'react-icons/si';
import {FaWordpress} from 'react-icons/fa';
import {SiAdobeillustrator} from 'react-icons/si';
import {SiAdobeaftereffects} from 'react-icons/si';
import {SiAdobephotoshop} from 'react-icons/si';
import {SiAdobepremierepro} from 'react-icons/si';
import {SiAdobexd} from 'react-icons/si';
import {FaGithub} from 'react-icons/fa';



const Experience = () => {
    return (
        <section id="experience" className="experience container section">
            <h5>Mis habilidades</h5>
            <h2>Mi experiencia</h2>

    <div className="skillsContainer grid">
            {/* GRUPO DE SKILLS*/ }
        <div className="skillGroup">
            <div className="groupTitle">
                <h2 className="title">Desarrollo Web</h2>
                <span className="subTitle"> +2 años de experiencia</span>
            </div>

            <div className="generalSkills">

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaHtml5 className="icon"/>
                    </div>
                    <span className="skillName">HTML</span>
                    <small>Avanzado</small>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaCss3Alt className="icon"/>
                    </div>
                    <span className="skillName">CSS</span>
                    <small>Avanzado</small>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <TbBrandJavascript className="icon"/>
                    </div>
                    <span className="skillName">JavaScript</span>
                    <small>Intermedio</small>

                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaBootstrap className="icon"/>
                    </div>
                    <span className="skillName">Bootstrap</span>
                    <small>Intermedio</small>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaSass className="icon"/>
                    </div>
                    <span className="skillName">SASS</span>
                    <small>Intermedio</small>

                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaPhp className="icon"/>
                    </div>
                    <span className="skillName">PHP</span>
                    <small>Intermedio</small>

                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiVisualstudiocode className="icon"/>
                    </div>
                    <span className="skillName">C#</span>
                    <small>Intermedio</small>

                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiMysql className="icon"/>
                    </div>
                    <span className="skillName">MYSQL</span>
                    <small>Avanzado</small>

                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiMicrosoftsqlserver className="icon"/>
                    </div>
                    <span className="skillName">SQL</span>
                    <small>Avanzado</small>

                </div>


                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaGithub className="icon"/>
                    </div>
                    <span className="skillName">Git Hub</span>
                    <small>Avanzado</small>

                </div>
            </div>
        </div>

        <div className="skillGroup">
            <div className="groupTitle">
                <h2 className="title">Diseño UX/UI</h2>
                <span className="subTitle"> +2 años de experiencia</span>
            </div>

        <div className="generalSkills">

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <FaWordpress className="icon"/>
                    </div>
                    <span className="skillName">Wordpress</span>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiAdobeillustrator className="icon"/>
                    </div>
                    <span className="skillName">Illustrator</span>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiAdobephotoshop className="icon"/>
                    </div>
                    <span className="skillName">Photoshop</span>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiAdobexd className="icon"/>
                    </div>
                    <span className="skillName">XD</span>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiAdobeaftereffects className="icon"/>
                    </div>
                    <span className="skillName">AE</span>
                </div>

                <div className="singleSkill">
                    <div className="iconBox flex">
                        <SiAdobepremierepro className="icon"/>
                    </div>
                    <span className="skillName">PR</span>
                </div>

            </div>
        </div>
    </div>
    
</section>







































//         <section id="experience">
//            <h5>Mis habilidades</h5>
//            <h2>Mi experiencia</h2>

//             <div className="container experience__container">

//                 <div className="experience_frontend">
//                     <h3>Desarrollador Frontend</h3>
//                     <div className="experience__content">

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>HTML</h4>
//                             <small className="text-light">Avanzado</small>
                            
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>CSS</h4>
//                             <small className="text-light">Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Javascript</h4>
//                             <small className="text-light">Intermedio - Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                          <div>
//                             <h4>Bootstrap</h4>
//                             <small className="text-light">Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>SASS</h4>
//                             <small className="text-light">Intermedio</small>
//                         </div>
//                         </article>

//                     </div>
//                 </div>
//                 {/* FIN FRONTEND */}

//             <div className="experience_backend">
//                 <h3>Desarrollador Backend</h3>
//                     <div className="experience__content">

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>PHP</h4>
//                             <small className="text-light">Intermedio - Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Visual C#</h4>
//                             <small className="text-light">Intermedio - Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>SQL SERVER</h4>
//                             <small className="text-light">Intermedio - Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>MYSQL</h4>
//                             <small className="text-light">Intermedio - Avanzado</small>
//                         </div>
//                         </article>
//                 </div>
//             </div>

//                 {/* FIN BACKEND */}

//                 <div className="experience_desing">
//                 <h3>Diseñador Web</h3>
//                 <div className="experience__content">

//                     <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Wordpress</h4>
//                             <small className="text-light">Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Adobe Illustrator</h4>
//                             <small className="text-light">Intermedio - Avanzado</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Adobe Photoshop</h4>
//                             <small className="text-light">Intermedio</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Adobe XD</h4>
//                             <small className="text-light">Intermedio</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Adobe After Effects</h4>
//                             <small className="text-light">Intermedio</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Adobe Premiere Pro</h4>
//                             <small className="text-light">Intermedio</small>
//                         </div>
//                         </article>

//                         <article className="experience__details">
//                         <BsPatchCheckFill className="experience__details-icon"/>
//                         <div>
//                             <h4>Filmora Wondeshare</h4>
//                             <small className="text-light">Intermedio</small>
//                         </div>
//                         </article>
//                 </div> 
//             </div>
//                 {/* FIN DESING */}
//         </div>
//  </section>
    )
}

export default Experience
