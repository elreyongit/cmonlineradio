import React from 'react'
import './index.css'
import { BsFillHouseFill, BsFacebook, BsLinkedin, BsWhatsapp } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { BiPhoneCall } from 'react-icons/bi'
import { AiFillInstagram } from 'react-icons/ai'
import MD from '../../assets/MD.png'

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
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
    {/* Meet the Executives */}
      <div className='executives'>
        <div className='directors'>
          <div className='md-image'>
            <img src={MD} alt='Managing Director' className='md'/>
          </div>
          <h1>
            CHARLES MAWULORM
            <br />
            <small>
              Managing Director </small>
          </h1>
        </div>
      </div>

    {/* Social Icons */}
      <div className='social-media'>
        <a href='https://wa.me/233554038440' target='_blank' className='social'><BsWhatsapp color='var(--color-bg)' size={40}/></a>
        <a href='mailto:cm.incor@gmail.com' target='_blank' className='social'><MdEmail color='var(--color-bg)' size={50}/></a>
        <a href='https://www.facebook.com/charlesM.masiku' target='_blank' className='social'><BsFacebook color='var(--color-bg)' size={40}/></a>
        <a href='https://www.linkedin.com/mwlite/company/cm-online-radio' target='_blank' className='social'><BsLinkedin color='var(--color-bg)' size={40}/></a>
        <a href='https://instagram.com/epicinvestltd?ighid=YmMyMTA2M2Y=' target='_blank' className='social'><AiFillInstagram color='var(--color-bg)' size={47}/></a>
      </div>
    </div>
  )
}

export default Contact