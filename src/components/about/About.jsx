import React from 'react'
import './About.css';
import Image from '../../assets/blackshirt.png'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {VscFolderLibrary}  from 'react-icons/vsc'
const About = () => {
  return (
   <section id='about' className='about section nav-link about'>

<h5>Get To Know</h5>

<h2>About Me</h2>

<div className='container about_container'>

<div className='about_me'>
<div className='about_me-image'>
<img src={Image}></img>
</div>
</div>

<div className='about_content'>
<div className='about_cards'>

<article className='about_card'>
<FaAward className='about_icon'/>
<h5>Experience</h5>
<small> 0-1 Years Working</small>
</article>

<article className='about_card'>
<AiOutlineFieldTime className='about_icon'/>
<h5>Coding</h5>
<small>1000+ Hours</small>
</article>

<article className='about_card'>
<VscFolderLibrary className='about_icon'/>
<h5>Projects</h5>
<small>3+ Completed</small>
</article>


</div>

<p id='user-detail-intro'>
I'm a full-stack web developer with experience in HTML, CSS, JavaScript, React.js, and Node.js. I've been learning and working on web development for the past year. I enjoy creating user-friendly websites with interactive features. I can turn designs into functional websites using HTML, CSS, and React.js. On the back-end, I use Node.js to build server-side applications and handle data efficiently. I pay attention to detail and write clean, easy-to-understand code. I'm always eager to learn and stay updated with the latest technologies in web development. I'm passionate, adaptable, and ready to take on new challenges to contribute to the success of web projects.
</p>
 <a href='#contact' className='btn btn-primary'>Let's Talk</a>
</div>

</div>
   </section>
  )
}

export default About;
