import React from 'react'
import './index.css'
import { BsFillHouseFill, BsFacebook, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-us'>
      <h2>Contact Us</h2>
      </div>
      <div className='offline-contact'>
      <div className='address'>
        <BsFillHouseFill size={30}/>
        <h4>Lashibi, Tema, Ghana</h4>
      </div>
      <div className='name'>
      <hr></hr>
      </div>

      <div className='phone-contact'>
        <BiPhoneCall size={30}/>
        <h4>MD/CEO @ +233554038440</h4>
      </div>

      </div>

      <div className='social-media'>
        <a href='https://wa.me/233554038440' target='_blank' className='whatsapp'><BsWhatsapp size={30}/></a>
        <a href='mailto:cm.incor@gmail.com' target='_blank' className='email'><MdEmail size={40}/></a>
        <a href='https://www.facebook.com/charlesM.masiku' target='_blank' className='facebook'><BsFacebook size={30}/></a>
        <a href='https://www.linkedin.com/mwlite/company/cm-online-radio' target='_blank' className='linkedin'><BsLinkedin size={30}/></a>
        <a href='https://instagram.com/epicinvestltd?ighid=YmMyMTA2M2Y=' target='_blank' className='instagram'><AiFillInstagram size={40}/></a>
      </div>
    </div>
  )
}

export default Contact