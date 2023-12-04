import React from 'react'
import './Portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Sidebar from '../../img/sidebar.png';
import HOC from '../../img/hoc.png';
import Ecommerce from '../../img/ecommerce.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css';

function Portfolio() {
  return (
   <div className="portfolio">
    <span className='amazing-project'>Amazing Project</span><br />
    <span>Portfolio's</span>
    <Swiper className='swiper' id='swiper-slider' spaceBetween={30} sliderPerView={3} grabCursor={true}>
        
        <SwiperSlide>
            <img className='newimg1' src={Ecommerce} alt="" >
            </img>
        </SwiperSlide>
        <SwiperSlide className='swiper-slider2'>
            <img className='newimg2' src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider3'>
            <img className='newimg3' src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swiper-slider4'>
            <img className='newimg4' src={HOC} alt="" />
        </SwiperSlide>
   </Swiper>
   </div>
   
  )
}

export default Portfolio