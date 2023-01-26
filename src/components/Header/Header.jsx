import React from 'react'
import './index.css'
import Logo from '../../assets/logo.jpg'
import { useState } from 'react'
import Mobile from './Mobile/Mobile'
// import { AiOutlineBars } from 'react-icons/ai'

const Header = () => {

  const [active, setActive ] = useState('#body');
  // const [open, setOpen ]= useState(false);
  // const showDropdown =()=>{
  //   setOpen(true);
  // }

  // const hideDropdown =()=>{
  //   setOpen(false);
  // }

  return (
    <div className='header'>
      <div className='logoitems'>
        <img src={Logo} className='logo' />
        <h3 className='cmonline'>CMOnline Radio</h3>
        </div>
        <div className='headnav'>
        <a href='#about' onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}>
            <h3 className='about-link'>About</h3>
          </a>

          <a href='/services' className='services-link'>
            <h3>Services</h3>
          </a>

          <a href='/portfolio' className='portfolio-link'>
            <h3>Portfolio</h3>
          </a>

          <a href='/contact' className='contact-link'>
            <h3>Contact</h3>
          </a>
        </div>

        {/* <div className='mobile-nav' onClick={showDropdown} onMouseLeave={hideDropdown}>
          {open ?(
                <div className='mobile-headnav'>
                  <a href='/home'>
                    <h4>Home</h4>
                  </a>
                  <a href='/services'>
                    <h4>Services</h4>
                  </a>
                  <a href='/portfolio'>
                    <h4>Portfolio</h4>
                  </a>
                  <a href='/about'>
                    <h4>About</h4>
                  </a>
                </div>
          ): 
          
          null }
        <AiOutlineBars size={40}/>
        </div> */}
        <Mobile />
    </div>
  )
}

export default Header