import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/facundo-andres-gomez" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/1924GAF97" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://www.instagram.com/facug.dev/" target="_blank" rel="noreferrer" ><FaInstagram /></a>
      <a href="https://twitter.com/FacuGDev?t=kGmXoJIpOGlCLB0BVAVWlg&s=08" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      
    </div>
  )
}

export default HeaderSocials