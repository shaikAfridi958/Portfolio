import React from 'react'
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';

import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

import wave from '../../img/wave.png';


function Footer() {
  return (
    <div className="footer">
        <p>afridi.madhire.shaik786@gmail.com</p>
        <img src={wave} alt='background image' />
        <div className='icons'>
            
            <div className="faicons-facebook">
                <FaFacebook href='https://www.instagram.com/shaik_afridi7?utm_source=qr&r=nametag'/>    
            </div>
            <div className="faicons-insta">   
                <FaInstagram href='https://www.instagram.com/shaik_afridi7?utm_source=qr&r=nametag'/>
            </div>
            <div className="faicons-github">
            <a href='https://github.com/shaikAfridi958'><FaGithub  href='https://github.com/shaik958'/></a>
            </div>
        </div>
        
        
    </div>
    )
}

export default Footer