import React from 'react';
import "./portfolio.css";
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// ARRAY PORTAFOLIO

const data = [
  {
    id: 1,
    imagen: IMG1,
    titulo: 'Nombre Proyecto',
    github: 'https://github.com',
    demo: 'https://linktree.com',
  },

  {
    id: 2,
    imagen: IMG2,
    titulo: 'Nombre Proyecto',
    github: 'https://github.com',
    demo: 'https://linktree.com',
  },

  {
    id: 3,
    imagen: IMG3,
    titulo: 'Nombre Proyecto',
    github: 'https://github.com',
    demo: 'https://linktree.com',
  },

  {
    id: 4,
    imagen: IMG4,
    titulo: 'Nombre Proyecto',
    github: 'https://github.com',
    demo: 'https://linktree.com',
  },

  {
    id: 5,
    imagen: IMG5,
    titulo: 'Nombre Proyecto',
    github: 'https://github.com',
    demo: 'https://linktree.com',
  },

  {
    id: 6,
    imagen: IMG6,
    titulo: 'Nombre Proyecto',
    github: 'https://github.com',
    demo: 'https://linktree.com',
  }
]

const Portfolio = () => {
  return (
    <section id='portolio'>
      <h5>Quieres ver</h5>
      <h2>Mis Proyectos</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, imagen, titulo, github, demo}) =>{
          return(
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                  <img src={imagen} alt={titulo} />
              </div>
                <h3>{titulo}</h3>
              <div className="portfolio__item-cta">
                  <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a>
                  <a href={demo} target='_blank' rel='noreferrer' className='btn btn-primary'>Live Demo</a>
              </div>
          </article>
          )
        })
      }
      </div>
    </section >
  )
}

export default Portfolio
