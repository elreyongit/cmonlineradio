import React from 'react'
import './index.css'
import { BsFillPersonXFill, BsFillJournalBookmarkFill } from 'react-icons/bs'
import { GrServices } from 'react-icons/gr'
import { AiFillContacts, AiOutlineBars, AiOutlineHome } from 'react-icons/ai'
import { useState } from 'react'

const Mobile = () => {
    const [show, setShow] = useState(false);
    const showDropdown=()=>{
        setShow(true);
    }
    const hideDropdown=()=>{
        setShow(false);
    }

  return (
    <div className='mobile' onClick={showDropdown} onMouseLeave={hideDropdown}>
        {show ?(
        <div className='mobile-container'>

        <div className='mobile-services'>
        <a href='/Body' className='mobile-home'>
            <h4>Home</h4>
            <AiOutlineHome />
        </a>
        </div>

        <div className='mobile-services'>
        <a href='/About' className='mobile-about'>
            <h4>About</h4>
            <BsFillPersonXFill />
        </a>
        </div>

        <div className='mobile-services'>
        <a href='/Services' className='mobile-service'>
            <h4>Services</h4>
            <GrServices />
        </a>
        </div>

        <div className='mobile-services'>
        <a href='/Portfolio' className='mobile-portfolio'>
            <h4>Portfolio</h4>
            <BsFillJournalBookmarkFill />
        </a>
        </div>

        <div className='mobile-services'>
        <a href='/Contact' className='mobile-contact'>
            <h4>Contact</h4>
            <AiFillContacts />
        </a>
        </div>

        </div>
        ):

        null}

        <AiOutlineBars size={50}/>
    </div>
  )
}

export default Mobile