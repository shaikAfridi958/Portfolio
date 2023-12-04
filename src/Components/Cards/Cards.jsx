import React from 'react'
import './Cards.css';
function Cards({emoji , heading, detail}) {
  return (
    <>

    <div className='cards'>
        <div style={{left:'-14rem'}}>
            <img className='image' src={emoji} alt=''/>
            <span id='heading' className='heading'>{heading}</span><br/>
            <span>{detail}</span><br />
            <button id='card-button-id' className='cards-button'>Learn More</button>
        </div>       
    </div>
    </>
  )
}

export default Cards;