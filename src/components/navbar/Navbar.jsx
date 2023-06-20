import React from 'react';
import './Navbar.css';
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsLaptop, BsMessenger} from 'react-icons/bs'
import {BsLaptopFill} from 'react-icons/bs'
import { useState } from 'react';

const Navbar =()=>
{
    const [activeNav,setActiveNav] = useState('#');
    return (
        <nav id='nav-menu' className='nav-link.home'>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav ==='#' ? 'active': ''}><AiOutlineHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav ==='#about' ? 'active': ''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active': ''}><BiBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active': ''}><BsLaptop/></a>
      <a href='#contact'  onClick={()=>setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active': ''}><BsMessenger/></a>
        </nav>
    )
}
export default Navbar;