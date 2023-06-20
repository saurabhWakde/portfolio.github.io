import React from 'react'
import './Portfolio.css'
import Img1 from '../../assets/plantorder.png';
import Img3 from '../../assets/plantorder2.png';
import Img4 from '../../assets/plantorder3.png';
import Img5 from '../../assets/plantorder5.png';
import Img6 from '../../assets/catalog.png';
import Img8 from '../../assets/catalog2.png';
import Img9 from '../../assets/catalog3.png';
import Img10 from '../../assets/catalog5.png';

import Img11 from '../../assets/netmeds.png';
import Img12 from '../../assets/netmeds2.png';
import Img13 from '../../assets/netmeds3.png';

const data=[
  {
    id:1,
    image:Img1,
    title:'LandingPage',
     Github:'https://github.com/saurabhWakde/-Plant_Order_Application',
     Demo:'https://dynamic-rolypoly-71853a.netlify.app/personalinfo.html'
  },
  {
    id:2,
    image:Img3,
    title:'Catogories',
    Github:'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo:'https://dynamic-rolypoly-71853a.netlify.app/personalinfo.html'
  },
  {
    id:4,
    image:Img5,
    title:'Checkout Page',
    Github:'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo:'https://dynamic-rolypoly-71853a.netlify.app/personalinfo.html'
  },
  {
    id:5,
    image:Img6,
    title:'Filters',
    Github:'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo:'https://dynamic-rolypoly-71853a.netlify.app/personalinfo.html'
  },

  {
    id:7,
    image:Img9,
    title:'Product Details',
    Github:'https://github.com/saurabhWakde/-Plant_Order_Application',
    Demo:'https://dynamic-rolypoly-71853a.netlify.app/personalinfo.html'
  },
  {
    id:8,
    image:Img10,
    title:'Singup Page',
    Github:'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo:'https://dynamic-rolypoly-71853a.netlify.app/personalinfo.html'
  }  
  ,
  {
    id:9,
    image:Img11,
    title:'Home Page',
    Github:'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo:'https://fantastic-khapse-deda88.netlify.app/'
  } 
  ,{
    id:10,
    image:Img12,
    title:'Trending Deals',
    Github:'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo:'https://fantastic-khapse-deda88.netlify.app/'
  } 
  ,
  {
    id:11,
    image:Img13,
    title:'Payments',
    Github:'https://github.com/saurabhWakde/Netmeds/tree/main',
    Demo:'https://fantastic-khapse-deda88.netlify.app/'
  } 
  
]


const Portfolio =()=>
 {
 
  return (
  <section id='portfolio'>
  <h5> My Recent Work</h5>
  <h2>Projects</h2>

<div className='container portfolio_container'>
{
  data.map(({id ,image ,title ,Github ,Demo})=>
  {
    return(
      <article key={id} className='portfolio_item'>
<div className='portfolio_item-image'>
<img src={image} alt={title}/>
</div>
<h3>{title}</h3>
<div className='portfolio_item-cta'>

<a href={Github} className='btn' target='_blank'>Github</a>
<a href={Demo} className='btn btn-primary' target='_blank'>LiveDemo</a>
</div>

</article>
    )
  })
}


</div>

  </section>
  )
}
export default Portfolio;
