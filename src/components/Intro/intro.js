import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import hireimg from '../../assets/hireme.png'
const Intro = () => {
  return (
    <section id='intro'>
        <div className="introcontent" >
            <span className='hello'>Hello</span>
            <span className="introtext">I'm<span className='introName'> Rutul</span><br />Software Engineer</span>
            <p className="intropara">Passionate Fullstack Web Developer with expertise in Node.js, Python,Php/MVC and front-end technologies.<br/> Skilled in crafting innovative web applications with robust backends and visually stunning, responsive interfaces.</p>
            <button className='btn' onClick={()=> document.getElementById('contact').scrollIntoView({behavior: 'smooth'})}><img src={hireimg} alt="Hire Me" className='btnimg'/>Hire Me</button>
        </div>
        <img src={bg} alt="" className='bg' />
    </section>
  )
}

export default Intro