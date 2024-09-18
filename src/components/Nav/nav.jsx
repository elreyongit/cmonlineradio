import React from 'react'
import './nav.css'
import Logo from '../../assets/logo.jpg'
import MobileLogo from '../../assets/logo.jpg'
import { BsFillPersonXFill, BsFillJournalBookmarkFill } from 'react-icons/bs'
import { GrServices } from 'react-icons/gr'
import { AiFillContacts, AiOutlineBars, AiOutlineHome } from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
const [show, setShow] = useState(false);
    const showDropdown=()=>{
        setShow(true);
    }
    const hideDropdown=()=>{
        setShow(false);
    }

  const [isActive, setActive] = useState({
    activeClass: null,
  });
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


        <a href="#About" onClick={() => setActive('About')} className={isActive === 'About' ? 'active' : ''}>
            <h3 className='about-link'>About</h3>
          </a>



          <a href="#Services" onClick={() => setActive('Services')} className={isActive === 'Services' ? 'active' : ''}>
            <h3 className='services-link'>Services</h3>
          </a>

          <a href="#Portfolio"  onClick={() => setActive('Portfolio')} className={isActive === 'Portfolio' ? 'active' : ''}>
            <h3 className='portfolio-link'>Portfolio</h3>
          </a>

        <a href="#Contact"  onClick={() => setActive('Contact')} className={isActive === 'Contact' ? 'active' : ''}>
            <h3 className='contact-link'>Contact</h3>
          </a>

        </div>

        <div className='mobile-menu'>
        <div className='mobile-logoitems'>
        <img src={MobileLogo} className='m-logo' />
        <h3 className='m-cmonline'>CMOnline Radio</h3>
        </div>

        <div className='mobile' onClick={showDropdown} onMouseLeave={hideDropdown}>
        {show ?(
        <div className='mobile-container'>

        <div className='mobile-services'>
        <a href='#' className='mobile-home'>
            <AiOutlineHome color='rgb(225, 104, 5)'/>
            <h4>Home</h4>
        </a>
        </div>

        <div className='mobile-services'>
        <a href='#About' className='mobile-about'>
            <BsFillPersonXFill color='rgb(225, 104, 5)' />
            <h4>About</h4>
        </a>
        </div>

        <div className='mobile-services'>
        <a href='#Services' className='mobile-service'>
            <GrServices color='rgb(225, 104, 5)'/>
            <h4>Services</h4>
        </a>
        </div>

        <div className='mobile-services'>
        <a href='#Portfolio' className='mobile-portfolio'>
            <BsFillJournalBookmarkFill color='rgb(225, 104, 5)'/>
            <h4>Portfolio</h4>
        </a>
        </div>

        <div className='mobile-services'>
        <a href='#Contact' className='mobile-contact'>
            <AiFillContacts color='rgb(225, 104, 5)'/>
            <h4>Contact</h4>
        </a>
        </div>

        </div>
        ):

        null}

        <AiOutlineBars size={50} color='rgb(225, 104, 5)' className='mobile-icon'/>
    </div>
    </div>

    </nav>
  )
}

export default Nav