import React from 'react'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import './index.css'

const Services = () => {
  return (
    <div className='services' id='Services'>
        <div className='services-left'>
            <h2>Services We Offer</h2>
            <p className='agency'>
                We are an agency with strict compliance to 
                providing quality and excellent services
            </p>
        </div>
        
        <div className='services-right'>
            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Online Radio Set-up and Advertising</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Social Media Marketing Services and Tutorials</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>E-commerce Business - Mini importation tutorials</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Graphics and Web Design</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Digital Advertising</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Video & Audio Editing</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Voiceover Production</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Professional Facebook, Instagram, LinkedIn, Live tutorials & set-up</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Bulk Message set-up</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Business Logo Designs</h3>
                </div>
            </article>

            <article className='service-content'>
                <hr />
                <div className='service-writeup'>
                <BsFillPatchCheckFill />
                <h3 className='service'>Ministry</h3>
                </div>
            </article>
        </div>
    </div>
  )
}

export default Services