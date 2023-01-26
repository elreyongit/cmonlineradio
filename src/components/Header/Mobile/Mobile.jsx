import React from 'react'
import './index.css'
import { BsFillPersonXFill, BsFillJournalBookmarkFill } from 'react-icons/bs'
import { GrServices } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
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
        <a href='#about'>
            <h4>About</h4>
            <BsFillPersonXFill />
        </a>

        <a href='#services'>
            <h4>Services</h4>
            <GrServices />
        </a>

        <a href='#portfolio'>
            <h4>Portfolio</h4>
            <BsFillJournalBookmarkFill />
        </a>
        </div>
        ):

        null}

        <AiOutlineBars size={50}/>
    </div>
  )
}

export default Mobile