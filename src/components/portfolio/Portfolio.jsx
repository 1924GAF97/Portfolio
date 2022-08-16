import React from 'react';
import IMG1 from '../../assets/booktravel.png';
import IMG2 from '../../assets/nft.png';
import IMG3 from '../../assets/tesla.png';
import IMG4 from '../../assets/landing.png';
import IMG5 from '../../assets/notas.png';
import IMG6 from '../../assets/movie.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Booktravel',
      img: IMG1,
      description:
        'Booktravel is a clone of the hotel booking page Booking.com',
      technologies: 'React | Material-UI | CSS',
      link: '',
      github: 'https://github.com/1924GAF97/BookTravel',
    },
    {
      id: 2,
      title: 'Landing-Page-Fashion',
      img: IMG4,
      description:
        'A fashion landing page with carousel of images',
      technologies: 'HTML | CSS | JavaScript',
      link: '',
      github: 'https://github.com/1924GAF97/landing-page-fashion',
    },
    {
      id: 3,
      title: 'NFT´s-MarketPlace',
      img: IMG2,
      description: 'An NFT marketplace with a responsive design',
      technologies: 'HTML | CSS | JavaScript',
      link: '',
      github: 'https://github.com/1924GAF97/NFT-Marketplace',
    },
    {
      id: 4,
      title: 'Tesla-Clon',
      img: IMG3,
      description:
        'A clone of the website of the famous Tesla company',
      technologies: 'React | CSS | Material-UI',
      link: '',
      github: 'https://github.com/1924GAF97/Tesla-Clon',
    },
    {
      id: 5,
      title: 'Blog-de-notas',
      img: IMG5,
      description:
        'User friendly app to plan your day and manage tasks',
      technologies: 'HTML | CSS | JavaScript',
      link: '',
      github: 'https://github.com/1924GAF97/Project-Notes',
    },
    {
      id: 6,
      title: 'React-movies',
      img: IMG6,
      description:
        'A movie website that consumes an API to bring information from them',
      technologies: 'React | CSS | javaScript',
      link: '',
      github: 'https://github.com/1924GAF97/movie-info',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
           {/*    <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
