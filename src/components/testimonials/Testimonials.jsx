import React from 'react';
import "./testimonials.css";
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

//Import Swiper core and Required Modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';

//Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:AVTR1,
    nombre:'Cristian Romero',
    comentario: 'Excelente trabajo, cr  '
  },

  {
    avatar:AVTR2,
    nombre:'Eduardo Mena',
    comentario: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore voluptatem et, ipsum possimus perferendis provident delectus totam dicta ducimus id nemo magnam repellendus tempora quo? Ex rem magnam expedita?'
  },

  {
    avatar:AVTR3,
    nombre:'Valentina Rodriguez',
    comentario: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore voluptatem et, ipsum possimus perferendis provident delectus totam dicta ducimus id nemo magnam repellendus tempora quo? Ex rem magnam expedita?'
  },

  {
    avatar:AVTR4,
    nombre:'Laura Gonzales',
    comentario: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt labore voluptatem et, ipsum possimus perferendis provident delectus totam dicta ducimus id nemo magnam repellendus tempora quo? Ex rem magnam expedita?'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Clientes satisfechos</h5>
      <h2>Testimonios</h2>


        <Swiper className="container container__testimonials"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
          { 
          data.map(({avatar, nombre, comentario}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt={nombre} />
              </div>
              <h5 className='client__name'>{nombre}</h5>
                <small className='client__review'>{comentario}</small>
            </SwiperSlide>
            )
          })
          }
        </Swiper>
    </section >
  )
}


export default Testimonials