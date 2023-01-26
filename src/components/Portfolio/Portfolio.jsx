import React from 'react'
import './index.css'
import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='project-head'>
        <h2>Projects Carried Out</h2>
        </div>

        <div className='project-container'>
        <article className='projects'>
            <img src={Project1} className='project' />
        </article>

        <article className='projects'>
            <img src={Project2} className='project' />
        </article>
        </div>
    </div>
  )
}

export default Portfolio