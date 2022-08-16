import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Facu Gómez</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/facundo-andres-gomez" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/1924GAF97" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/facug.dev/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      <a href="https://twitter.com/FacuGDev?t=kGmXoJIpOGlCLB0BVAVWlg&s=08" target="_blank" rel="noreferrer" ><FaTwitter/></a>
      
      </div>
      <div className="footer__copyright">
        <small>&copy; ET 2022. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer