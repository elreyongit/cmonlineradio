import React from 'react'
import './index.css'
import Logo from '../../assets/logo.jpg'
import { useState } from 'react'
import Mobile from './Mobile/Mobile'

const Nav = () => {

  const [isActive, setActive] = useState({
    activeClass: null,
  });

  const toggleClass = () => {
    setActive(!isActive);
  };
  return (
    
    <nav>
      <div className='logoitems'>
        <img src={Logo} className='logo' />
        <h3 className='cmonline'>CMOnline Radio</h3>
        </div>
        
        <div className='headnav'>
          
          <a href="#"  onClick={() => setActive('#')} className={isActive === '#' ? 'active' : ''}>
            <h3 className='home-link'>Home</h3>
          </a>
      

        <a href="About" className={isActive === 'About' ? 'active' : ''}>
            <h3 className='about-link'>About</h3>
          </a>
        

        
          <a href="Services" onClick={() => setActive('Services')} className={isActive === 'Services' ? 'active' : ''}>
            <h3 className='services-link'>Services</h3>
          </a>
        


        
          <a href="Portfolio"  onClick={toggleClass}>
            <h3 className='portfolio-link'>Portfolio</h3>
          </a>
        

        
          <a href="Contact"  onClick={() => setActive('Contact')} className={isActive === 'Contact' ? 'active' : ''}>
            <h3 className='contact-link'>Contact</h3>
          </a>
        
        </div>

        
        <div className='mobile-nav'>
          <Mobile />
        </div>
        
    </nav>
  )
}

export default Nav