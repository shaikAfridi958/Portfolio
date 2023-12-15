import React from 'react'
import "./NavBar.css"
import Toggle from '../../Components/Toggle/Toggle.jsx'
import { FaSun, FaMoon, FaCircle } from 'react-icons/fa'
import { useState } from 'react';
import Intro from '../Intro/Intro';
import App from '../../App';
import Hamburger from 'hamburger-react';
import { Link } from 'react-scroll';
import Services from '../Services/Services';
import Experience from '../Experience/Experience';
import Portfolio from '../Portfolio/Portfolio';
import Testimonials from '../Testimonials/Testimonials';
import { colors } from '@mui/material';


function NavBar() {
    function scrollHome(){
            window.scrollBy(0,25);    
        
    }
    function scrollServices(){
        if(window.innerWidth==600){
            window.scrollBy(0,1258)
        }
        else{
            window.scrollBy(0,810);
        }      
        
        
    }
    function scrollExperiences(){
        if(window.innerWidth==600){
            window.scrollBy(0,2130)
        }else{
            window.scrollBy(0,915);
        }
        
    }
    function scrollPortfolio(){
        if(window.innerWidth==600){
            window.scrollBy(0,3300)
        }else{
            window.scrollBy(0,2050);
        }
        
    }
    function scrollTestimonials(){
        if(window.innerWidth==600){
            window.scrollBy(0,4425)
        }
        else{
            window.scrollBy(0,2495);
        }
        
    }
    function scrollContact(){
        if(window.innerWidth==600){
            window.scrollBy(0,5000)
        }else{
            window.scrollBy(0,2850);
        }
        
    }

    const [isOpen, setOpen]=useState([false])
    
  return (
    <div id='nav-wrapper' className='nav-wrapper'>
        <div className='welcome'>
            <h1 className='welcome-message'>
                <span className='message'> Welcome To Afridi's Professional World</span>  
            </h1>
        </div>
        <div className="nav-left">
            <div className="nav-name">Afridi</div>
            <p className='theme'>Theme Change</p>
            {/* <Toggle /> */}
        </div>
        <div className="nav-right">
          
            <div className="nav-list">
                <ul style={{listStyleType:'none'}}>
                    <Link className='nav-box1' spy={true} to={NavBar} smooth={true} activeClass='activeClass' offset={-100} duration={500}>
                        <li onClick={scrollHome} className='nav-right-listitems'>Home</li>
                    </Link>
                    <Link className='nav-box2' spy={true}  to={Services} smooth={true} activeClass='activeClass' offset={-100} duration={500}>
                        <li onClick={scrollServices} className='nav-right-listitems'>Services</li>
                    </Link>
                    <Link className='nav-box3' spy={true} to={Experience} smooth={true} activeClass='activeClass' offset={-100} duration={500}>
                        <li onClick={scrollExperiences}className='nav-right-listitems'>Experiences</li>
                    </Link>
                    <Link className='nav-box4'spy={true} to={Portfolio} smooth={true} activeClass='activeClass' offset={-100} duration={500}>
                        <li onClick={scrollPortfolio} className='nav-right-listitems'>Portfolio</li>
                    </Link>  
                    <Link className='nav-box5' spy={true} to={Testimonials} smooth={true} activeClass='activeClass' offset={-100} duration={500}>
                        <li onClick={scrollTestimonials} className='nav-right-listitems'>Testimonials</li>
                    </Link>   
                </ul>
            </div>
            <button className="button" id='contact-id' onClick={scrollContact}>Contact</button>
        </div> 
    </div>
  )
}

export default NavBar