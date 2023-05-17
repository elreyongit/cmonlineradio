import React from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const High = ({locate, className, text}) => {
  return (
        // <div className='mobile-services'>
        // <a href=`$locate}` className='mobile-home'>
        //     <h4>Home</h4>
        //     <AiOutlineHome />
        // </a>
        // </div>


        <div className='mobile-services'>
            <Link to={locate} className={className}>
                {text}
                <AiOutlineHome />
            </Link>
        </div>
  )
}

export default High