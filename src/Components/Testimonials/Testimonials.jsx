import React from 'react';
import './Testimonials.css';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import Scrollsl from './Scrolls/Scrollsl';
import Scrollsr from './Scrolls/Scrollsr';

function Testimonials() {
    const clients =[
       
        {
            img:profilePic2,
            review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ex officiis molestiae quod tempora lausantinum, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed."
        },
        {
            img:profilePic1,
            review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ex officiis molestiae quod tempora lausantinum, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed."
        },
        {
            img:profilePic3,
            review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ex officiis molestiae quod tempora lausantinum, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed."
        },
        {
            img:profilePic4,
            review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Ex officiis molestiae quod tempora lausantinum, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed."
        },

    ];
  return (
    
    <div className="testi-wrapper" >
        <Scrollsr />
        <Scrollsl />
        <div className="testi-heading">
            <span id='firstnth'> Clients always get </span>
            <span>Exceptional Work </span>
            <span>from me...</span>
            <div className='background_blur testi-blur'></div>
            <div className='background_blur testi-blur2' style={{ background:'#ABF1FF94', top:'100px'}}>
            </div>
            {/* <div className='background-blur testi-blur2' style={{background:'var(--purple'}}></div> */}
            {/* <div className="backgorund-blur testi-blurl" style={{background:'var(--purple)'}}></div>
            <div className="background-blur testi-blur2" style={{background:'skyblue'}}></div> */}
        </div>
        <Swiper slidesPerview={1} swiper-slide>
        {clients.map((client, index)=>{
                return(
                    
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt=''/>
                            <span>{client.review}</span>
                        </div>
                       
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>    
    )
}

export default Testimonials