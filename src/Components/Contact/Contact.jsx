import React from 'react'
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';

function Contact() {

    const form = useRef();
    const [done , setDone]=useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ipyy5b9', 'template_hxph87l', form.current, 'IbmN-NQj0SS1nb3xH')
        .then((result) => {
            console.log(result.text);
            console.log("sent successfully")
            setDone=(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  


  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span className='intouch'>Get in touch</span><br />
                <span className='contactme'>Contact me</span>
                <div className='background_blur contact-blur'></div>
                <div className='background_blur contact-blur2' style={{ background:'#ABF1FF94'}} />

            </div>  
        </div>
        <div className="contact-right">
            <form ref={form} onSubmit={sendEmail} className='formm'>
                <input type='text' name='user_name' className='user' placeholder='Name' />
                <input type='email' name='user_email' className='user' placeholder='Email' />
                <textarea name='message' className='user' placeholder='message' />
                {/* <button className='button send-button'>Send</button> */}
                <input type='submit' value='send' className='button send-button'></input>
                <span>{done && 'Thanks for contacting me!'}</span>
                {/* <div className="background-blur contact-blur" style={{background:'var(--purple'}}></div> */}
            </form>
        </div>
    </div>
  )
}

export default Contact