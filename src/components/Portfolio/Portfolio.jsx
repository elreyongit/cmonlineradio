import React from 'react'
import './index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.css";

// import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import "swiper/components/effect-flip/effect-flip.scss";
// import "swiper/components/scrollbar/scrollbar.scss";

import SwiperCore, { EffectFlip, Navigation, Pagination } from "swiper";
import Project1 from '../../assets/Project1.jpg'
import Project2 from '../../assets/Project2.jpg'
import Project3 from '../../assets/Project3.jpg'
import Project4 from '../../assets/Project4.jpg'
import Project5 from '../../assets/Project5.jpg'
import Project6 from '../../assets/Project6.jpg'
import Project7 from '../../assets/Project7.jpg'
import Project8 from '../../assets/Project8.jpg'
import Project9 from '../../assets/Project9.jpg'
import Project10 from '../../assets/Project10.jpg'
import Project11 from '../../assets/Project11.jpg'
import Project12 from '../../assets/Project12.jpg'
import Project13 from '../../assets/Project13.jpg'
import Project14 from '../../assets/Project14.jpg'
import Project15 from '../../assets/Project15.jpg'
import Project16 from '../../assets/Project16.jpg'
import Project17 from '../../assets/Project17.jpg'
import Project18 from '../../assets/Project18.JPG'
import Project19 from '../../assets/Project19.jpg'
import Project20 from '../../assets/Project20.jpg'
import Project21 from '../../assets/Project21.jpg'
import Project22 from '../../assets/Project22.jpg'
import Project23 from '../../assets/Project23.jpg'
import Project24 from '../../assets/Project24.jpg'
import Project25 from '../../assets/Project25.jpg'
import Project26 from '../../assets/Project26.jpg'
import Project27 from '../../assets/Project27.jpg'

const Portfolio = () => {
  return (
    <div className='portfolio'>
        <div className='project-head'>
        <h2>Projects Carried Out</h2>
        </div>

        <Swiper
            spaceBetween={20}
            slidesPerView={3}
            speed={500}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            touchRatio={1.5}
            navigation={true}
            effect={"slide"}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper"
      >
        
            <SwiperSlide>
            <img src={Project1} alt='Image1' className='project' />
            </SwiperSlide>

            <SwiperSlide>
            <img src={Project2} alt='Image2' className='project' />
            </SwiperSlide>

            <SwiperSlide>
            <img src={Project3} alt='Image2' className='project' />
            </SwiperSlide>

            <SwiperSlide>
            <img src={Project4} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project5} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project6} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project7} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project8} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project9} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project10} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project11} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project12} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project13} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project14} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project15} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project16} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project17} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project18} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project19} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project20} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project21} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project22} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project23} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project24} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project25} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project26} alt='Image2' className='project' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Project27} alt='Image2' className='project' />
            </SwiperSlide>
      </Swiper>

       
    </div>
  )
}

export default Portfolio