import React from 'react'
import './index.css'
import { BsCheck2Square } from 'react-icons/bs'

const About = () => {
  return (
    <div className='about' id='About'>
        <div className='about-write-up'>
        <h2 className='about-head'>About</h2>
        <p className='about-p'>
            <b>CM Online Radio</b> is a professional Social Media
            Marketing Agency that professionally manages the following Social
            Media Business Pages:

        </p>
        </div>
        <div className='tutorial-services'>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>
                Zirrah Automotive Enterprise
            </h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Epic Investment Ltd</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Desteria Consult</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Prac Ltd</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>International School of the Prophet</h4>
            </div>
            <div className='service-item'>
            <BsCheck2Square />
            <h4>Apostolic Glory Ministry</h4>
            </div>
        </div>
    </div>
  )
}

export default About