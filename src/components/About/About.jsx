import React from 'react'
import './index.css'
import { BsCheck2Square } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about'>
        <div className='about-write-up'>
        <h2 className='about-head'>About</h2>
        <p className='about-p'>
            <b>CM Online Radio</b> is a professional Social Media
            Marketing Agency that professionally manage your Social
            Media Business Pages and also offer tutorial services in:

        </p>
        </div>
        <div className='tutorial-services'>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>
                Digital Marketing
            </h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>E-commerce business (Mini-importation)</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Graphics and Web Design</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Bulk SMS Set-up</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Digital Advertising</h4>
            </div>
        </div>
    </div>
  )
}

export default About