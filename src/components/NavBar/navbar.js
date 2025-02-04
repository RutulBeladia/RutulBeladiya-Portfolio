import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactimg from  '../../assets/contact.png'
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png'
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="Logo" className='logo' />
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem'>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem'>Portfolio</Link>
        </div>
        <button className='contactMebtn' onClick={()=> document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}>
            <img src={contactimg} alt="" className='contactMe' />Contact Me
        </button>
        <img src={menu} alt="menu" className='Mobmenu' onClick={()=>setShowMenu(!showMenu)} />
        <div className="navMenu" style={{display: showMenu?  'flex' : 'none'}}>

            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem'onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar