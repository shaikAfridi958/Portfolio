import React, { useState } from 'react'
import './Services.css'
import Card from '../Cards/Cards.jsx';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png'
import dummy from './dummy.pdf';
import Experience from '../Experience/Experience';
import {motion, AnimatePresence} from 'framer-motion';


function Services() {



  return (
    <div className="services">
        <div className="services-left">
            <div className="services-name">
                <span>My Awesome </span><br></br>
                <span>Services </span><br></br>
                <span>
                    Frontend Developer with high level 
                    of experience in web designing and <br/>
                    development, producting the quality work.
                </span>
            </div>
            <a href={dummy} download>
            <button className='button services-button'>Download CV</button>
            </a>
            
            <div className='background_blur services_blur'></div>
            <Experience/>
        </div>
        <div className='services_right'>
            <AnimatePresence>
                <motion.div initial= {{x:'50%'}} animate={{x:'-10%'}} className='card' style={{left:'14rem'}}>
                  <Card emoji={HeartEmoji}
                  heading ={'Design Skills'}
                  detail={'Figma, Photoshop,Adobe XD'}
                  />
                </motion.div>
              </AnimatePresence>
               <motion.div initial= {{x:'-20%'}} animate={{x:'0%'}}   className='card' style={{top:'12rem', left:'14rem'}}>
                <Card emoji={Glasses}
                heading ={'Developer'}
                detail={'Html, Css, JavaScript, React'}
                />
               </motion.div>
               <motion.div initial= {{y:'20%'}} animate={{y:'-10%'}}  >
                <Card className='card' emoji={Humble}
                heading ={'UI and UX'}
                detail={'Best Design Award'}
                />
               </motion.div>
               <div className='services-blur2' style={{background:'var(--purple'}}></div>
                             
          </div>
    </div>
  )
}

export default Services