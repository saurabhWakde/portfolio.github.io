import React from 'react';
import './Header.css';
import CTA from './CTA';
import ME from '../../assets/kurta2.png'
import Headersocials from './Headersocials'

const Header =()=>
{
    return (
        <header>
       <div className='container header_container'>
       <h5>Hello' i am,</h5>
       <h1 id='user-detail-name'>Saurabh Wakde</h1>
       <h5 className='text-light'>Fullstack Developer</h5>
       <CTA/>
       <Headersocials/>
       <div className='me'>
       <img  src={ME} className='home-img'></img>
       </div>
       <a href='#contact' className='scroll_down'>Scroll Down</a>
       </div>
        </header>
    )
}
export default Header;