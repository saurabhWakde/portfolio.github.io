import React from 'react';
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
 
const Footer=()=>
{
    return (
        <footer>
      <a href='#' className='footer_logo'></a>
      <ul className='permalinks'>
      <li><a href='#'>Home </a></li> 
      <li><a href='#about'>About</a></li> 
      <li><a href='#experience'>Experience</a></li> 
      <li><a href='#services'>Services</a></li> 
      <li><a href='#portfolio'>Portfolio</a></li> 
      <li><a href='#contact'>Contact</a></li> 
      </ul>

      <div className='footer_social'>
      <a href='https://www.linkedin.com/in/saurabh-wakde/' target='_blank' id='contact-linkedin'><BsLinkedin/></a>
      <a href='https://github.com/saurabhWakde' target='_blank' id='contact-github'><BsGithub/></a>
      <a href='https://instagram.com/saurabhpatil9579?igshid=NGExMmI2YTkyZg==' target='_blank'><BsInstagram/></a>
      </div>

      <div className='footer_copyright'>
      <small >&copy;All rights reserved.</small>
      </div>
        </footer>
    )
}
export default Footer;