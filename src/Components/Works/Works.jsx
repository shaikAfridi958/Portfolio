import React from 'react'
import './Works.css'
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import Upwork from '../../img/Upwork.png';
import Amazon from '../../img/amazon.png';
import Fiverr from '../../img/fiverr.png'
import {motion} from 'framer-motion';

function Works() {
  return (
    <div className="works">
            <div className="services-name">
                <span>Worked for all these</span><br></br>
                <span>Brands and Clients</span><br></br>
                <spane>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit<br/>
                    Minima accusamus eos voluptas fuga, ullam necessitatibus<br/>
                    Nesciunt eos architecto eius doloremque sint unde tempora cum<br/>
                </spane>  
                <button className='button services-button'>Download CV</button>
                <div id ='loading' className='loading'>
                    <span className='good'>Good days</span><br />
                    <span className='are'>are-----&gt;</span>
                    <span className='loaderr'></span>
                    <span className='loadingg' id='loader'>Loading</span>
                    
                </div>
            </div>
            
            <div className='background_blurr' style={{background:'rgb(238 210 255)'}}>
            </div>
            <div className='background_blurrr' style={{ background:'#ABF1FF94', top:'100px'}}>
            </div>
            <motion.div style={{x:0}} animate={{x:1}} className="works-right">
                <motion.div animate={{ rotate: 360 }}className="works-mainCircle">
                    <div id='upwork-circle' className="works-semCircle">
                        <img className='sem-img' src={Upwork} alt=''/>
                    </div>
                    <div className="works-semCircle">
                        <img  className='sem-img' src={Fiverr} alt=''/>
                    </div>
                    <div className="works-semCircle">
                        <img  className='sem-img' src={Amazon} alt=''/>
                    </div>
                    <div className="works-semCircle">
                        <img  className='sem-img' src={Shopify} alt=''/>
                    </div>
                    <div className="works-semCircle">
                        <img  className='sem-img' src={Facebook} alt=''/>
                    </div>
                </motion.div>
                <div className='works-backCircle blueCircle'></div>
                <div className='works-backCircle yellowCircle'></div>
            </motion.div>
        </div>
  )
}

export default Works