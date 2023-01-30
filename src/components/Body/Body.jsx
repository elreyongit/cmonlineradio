import React from 'react'
import './index.css'
import Logo from '../../assets/Logo.png'
// import { BsHouseFill } from 'react-icons/bs'
// import { GrContactInfo } from 'react-icons/gr'

const Body = (props) => {
  const {setActiveNav}=props
  return (
    <div className='body' onEnterViewport={() => setActiveNav("#active")}>
        <div className='body-write'>
        <h1 className='we-are'>We are a Social Media</h1>
        <h1 className='market'>MARKETING AGENCY</h1>
        <p className='impact'>...impacting lives, raising well informed
            entrepreneurs with skills and knowledge
        </p>

        {/* <div className='write-icons'>
            <a href='/contact'><BsHouseFill /></a>
            <a href='/contact'><GrContactInfo /></a>
        </div> */}
        </div>
        
        <div className='body-image'>
            <img src={Logo} className='main-logo' />
        </div>
    </div>
  )
}

export default Body