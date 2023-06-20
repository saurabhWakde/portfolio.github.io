import React from 'react'
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

export const Contact= () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ytj7t1m', 'template_th8w7ru', form.current, 'vEFklt8C7OgxLKTYu')
      e.target.reset()
       

    }

    return (
     <section id='contact' className='nav-link contact'>
    <h5>Get In Touch</h5>
    <h2> Contact Me</h2>
    <div className='container contact_container'>
    <div className='contact_options'>
    <article className='contact_option'>
    <AiOutlineMail  className='contact_option-icon'/>
     <h4>Email</h4>
     <h5 id='contact-email'>saurabh430@gmail.com</h5>
     <a href='mailto:saurabh430@gmail.com' target='_blank'>Send a message</a>
    </article>

    <article className='contact_option'>
    <BsInstagram className='contact_option-icon'/>
     <h4>Instagram</h4>
     <h5>saurabhpatil9579</h5>
     <a href='https://www.instagram.com/direct/inbox/' target='_blank'>Send a message</a>
    </article>

    <article className='contact_option'>
    <BsWhatsapp  className='contact_option-icon'/>
     <h4>WhatsApp</h4>
     <h5 id='contact-phone'>9579398683</h5>
     <a href="https://api.whatsapp.com/send?phone=9579398683" target='_blank'>Send a message</a>
    </article>

    </div>

    <form ref={form} onSubmit={sendEmail}>
    <input type='text' name='name' placeholder='Your Full Name' required></input>
    <input type='email' name='email'  placeholder='Your Email' required></input>
    <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
    <button type='submit' name='message' className='btn btn-primary'>Send Message</button>
    </form>
    </div>

     </section>
    )
}
export default Contact;