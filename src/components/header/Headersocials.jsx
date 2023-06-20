import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

const headersocials = () => {
  return (
    <div className='header_social'>
      <a href='https://www.linkedin.com/in/saurabh-wakde/' target='_blank' id='contact-linkedin'><BsLinkedin/></a>
      <a href='https://github.com/saurabhWakde' target='_blank' id='contact-github'><BsGithub/></a>
      <a href='https://instagram.com/saurabhpatil9579?igshid=NGExMmI2YTkyZg==' target='_blank'><BsInstagram/></a>
      <a href='href="https://api.whatsapp.com/send?phone=9579398683' target='_blank' id='contact-phone'><BsWhatsapp/></a>
    </div>
  )
}

export default headersocials
