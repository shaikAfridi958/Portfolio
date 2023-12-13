import React, { useState } from 'react'
import './intro.css';
import glasses from '../../img/glassesimoji.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png'
import Github from '../../img/github.png';
import Boy from '../../img/boy.png';
import Crown from '../../img/crown.png';
import vector1 from '../../img/Vector1.png'
import vector2 from '../../img/Vector2.png'
import Thumbup from '../../img/thumbup.png';
import {motion} from 'framer-motion';
import FloatinDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
    const transition={duration : 2, type:'spring'}
    function scrollContact(){
        if(window.innerWidth==600){
            window.scrollBy(0,5000)
        }
        else{
            window.scrollBy(0,2850);
        }
        
    }
   
  return (
    <div className="intro">
        <div className="intro-left">
            <div className="intro-name">
                <span id='hy-i-am'>Hy! I am </span><br></br>
                <span>Shaik Madhire Afridi</span><br></br>
                <span>
                    Frontend Developer with high level 
                    of experience in web designing and <br/>
                    development, producting the quality work.
                </span>
            </div>
            <button  onClick={scrollContact} className='button intro-button'>Hire Me</button>
            <div className="intro-icons">
                <a href='https://www.instagram.com/shaik_afridi7?utm_source=qr&r=nametag'><img src={Instagram} alt='Instagram Image'/></a>
                <a href='https://www.linkedin.com/in/shaik-madhire-afridi-4083b7214'><img src={Linkedin} alt='Linkedin Image' /></a>
                <a href='https://github.com/shaikAfridi958/Portfolio.git'><img src={Github} alt='Github Image' /></a>
                
            </div>
            <div className="intro-right">
                <img src={vector1} alt='Vector Image-1' />
                <img src={vector2} alt='Vector Image-2' />
                <img src={Boy} alt='Boy Image' />
                <motion.img initial={{x:'-100%'}} animate={{x:'20%'}} src={glasses} alt='Crown Image Image' />
                <div className='floatingdivs'>

                    <FloatinDiv img={Crown} text1="Web" text2="Developer" />
                    <FloatinDiv img={Thumbup} text1="Best Design" text2="Award" />
                    <div className='background_blur' style={{background:'rgb(238 210 255)'}}>
                    </div>
                    <div className='background_blur' style={{ background:'#ABF1FF94', top:'100px'}}>
                    </div>
                    
                </div>
               
            </div>
        </div>
        
    </div>
  )
}

export default Intro