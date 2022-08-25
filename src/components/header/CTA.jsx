import React from 'react';
import CV from '../../assets/Curriculum_vitae-Facundo_Gómez.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's talk</a>
    </div>
  )
}

export default CTA
