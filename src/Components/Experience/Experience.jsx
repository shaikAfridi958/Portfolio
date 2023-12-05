import React from 'react'
import './Experience.css';
function Experience() {
    

  return (
    <div className='experiencediv'>
        <span className='experiences'>My Experience </span>
        <hr className='hrline'></hr>
        <div className='experience'>
            <span id='vrline1' className="vline3"></span>
            <div className="achivement">
                <span className="circle">2+</span><br />
                <span className='years'>Years</span><br />
                <span className='downspann'>Experience</span>
            </div>
            <span className="vline1"></span>
            <div className="achivement">
                <span className="circle">3+</span><br />
                <span>Completed</span><br />
                <span className='downspan'>Projects</span>
            </div>
            <span className="vline2"></span>
            <div className="achivement">
                <span className="circle">4+</span><br />
                <span>Companies</span><br />
                <span className='downspan'>Worked</span>   
            </div>
            <span className="vline3"></span>     
        </div>
        <hr className='hrline2'></hr>
    </div>
        
       
  )
}

export default Experience