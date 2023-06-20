import React from 'react'
import './Github.css'
import {BsCheckLg} from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
const Github= () => 
{
  const imgStyle = {
    transition: "0.5s",
  };
  const imgStyle1 = {
    transition: "0.5s",
  };
  const imgStyle2 = {
    transition: "0.5s",
  };
  return (
   <section id='github  skills skills'>
   <h5>Github stats</h5>
   <h2><BsGithub/></h2>
   <div className='container github_container'>
   <article className='github'>

   <div className='github_head'>
   <h3>Languages</h3>
   </div>
   <ul className='github_list'>
   <a href="https://github.com/saurabhWakde" target='_blank'>
   <img id='github-streak-stats'  src="https://github-readme-stats.vercel.app/api/top-langs/?username=saurabhWakde&layout=compact&hide_border=true&theme=transparent"
   style={{ border: "none", ...imgStyle2 }}
   align="center"
   alt="saurabhwakde"
   onMouseOver={(e) => {
     e.target.style.opacity = "0";
     setTimeout(() => {
       e.target.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=saurabhWakde&layout=compact&hide_border=true&theme=transparent";
       e.target.style.opacity = "1";
     }, 500);
   }}
   onMouseOut={(e) => {
     e.target.style.opacity = "0";
     setTimeout(() => {
       e.target.src = "https://github-readme-stats.vercel.app/api/top-langs/?username=saurabhWakde&layout=compact&hide_border=true&theme=transparent";
       e.target.style.opacity = "1";
     }, 500);
   }}
   />
 </a>

   
   </ul>
   
   </article>

   <article className='github'>

   <div className='github_head'>
   <h3>Stats</h3>
   </div>
   <ul className='github_list'>
   
   <a href="https://github.com/saurabhWakde" _blank>
            <img id='github-top-langs'  src="https://github-readme-stats.vercel.app/api?username=saurabhWakde&show_icons=true&theme=transparent&hide_border=true"
            style={{ border: "none", ...imgStyle1 }}
            align="center"
            alt="saurabhwakde"
            onMouseOver={(e) => {
              e.target.style.opacity = "0";
              setTimeout(() => {
                e.target.src = "https://github-readme-stats.vercel.app/api?username=saurabhWakde&show_icons=true&theme=transparent&hide_border=true";
                e.target.style.opacity = "1";
              }, 500);
            }}
            onMouseOut={(e) => {
              e.target.style.opacity = "0";
              setTimeout(() => {
                e.target.src = "https://github-readme-stats.vercel.app/api?username=saurabhWakde&show_icons=true&theme=transparent&hide_border=true";
                e.target.style.opacity = "1";
              }, 500);
            }}
            />
          </a>
   </ul>
   </article>

   <article className='github'>

   <div className='github_head skills-card'>
   <h3>Streak</h3>
   </div>
   <ul className='github_list'>
   <a a href="https://github.com/saurabhWakde" target='_blank'>
   <img  id='github-streak-stats' 
            style={{ border: "none", ...imgStyle }}
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com?user=saurabhWakde&theme=transparent&hide_border=true&border_radius=1rem"
            alt="saurabhwakde"
            onMouseOver={(e) => {
              e.target.style.opacity = "0";
              setTimeout(() => {
                e.target.src = "https://github-readme-streak-stats.herokuapp.com?user=saurabhWakde&theme=transparent&hide_border=true&border_radius=1rem";
                e.target.style.opacity = "1";
              }, 500);
            }}
            onMouseOut={(e) => {
              e.target.style.opacity = "0";
              setTimeout(() => {
                e.target.src = "https://github-readme-streak-stats.herokuapp.com?user=saurabhWakde&theme=transparent&hide_border=true&border_radius=1rem";
                e.target.style.opacity = "1";
              }, 500);
            }}
          />
   </a>
   
   
   </ul>
   
   </article>

   </div>
   </section>
  )
}

export default Github;
