import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: 'linkedin.com/in/javier-irigoyen-terre-desarrollador-web-full-stack',
      name: 'Javier Irigoyen Terre',
      role: 'Full-Stack Web Developer. Analista en Quality Corp.',
      test: 'Facundo es una gran persona y un verdadero jugador de equipo. Siempre estuvo listo para compartir su habilidad como programador y como persona, lo que nos permitió mejorar el código y las habilidades blandas. Rápidamente supo como unir al grupo y crear un mejor ambiente de trabajo. ¡Definitivamente me encantaría trabajar con él en el futuro!',
    },
    {
      id: 2,
      link: 'linkedin.com/in/jonathan-montini',
      name: 'Jonathan Montini',
      role: 'Full-stack developer | Software Developer en Mercado Libre',
      test: "Trabajar con Facundo es realmente placentero. Es una persona que trabaja muy bien en equipo, aportando ideas innovadoras, respetando las decisiones grupales y dando lo mejor de sí para lograr los objetivos finales. Se destaca principalmente por la voluntad y predisposición de aprender y ayudar.",
    },
    {
      id: 3,
      link: 'linkedin.com/in/rocío-viana',
      name: 'Rocio Viana',
      role: 'Full Stack Web Developer | Frondend | Backend | JavaScript | Nodejs | React & Redux |',
      test: 'Facundo es una gran persona y un excelente compañero de equipo. Desde que comenzamos a trabajar juntos creó un ambiente de trabajo increíble. Siempre estuvo listo para ayudar y compartir su conocimiento. Fue un gusto estar en el mismo grupo!',
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper 
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
          <div className="client__avatar">
            <a href={test.link}>
              <BsLinkedin />
            </a>
          </div>
          <h5 className='client__name'>{test.name}</h5>
          <small className="client__review">{test.test}</small>
        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials