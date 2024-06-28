import React, { useRef } from 'react'
import './contact.css'
import LinkedIn from '../../assets/linkedin.png'
import Github from '../../assets/github.png'
import Instagram from '../../assets/Insta.png'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const form= useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_of5cf93', 'template_xkic9z9', form.current, 'vRZY3KB2o9yoPex7K')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email sent');
        },(error) => {
          console.log('FAILED...', error.text);
        });
  };
  return (
    <div id="contact">
        <h1 className='contactpagetitle'>Contact Me</h1>
        <span className="contactdesc">Please fill out the form below to discuss any work opportunities.</span>
        <form ref={form} action="" className="contactform" onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your Name' name='your_name' required />
            <input type="text " className='email' placeholder='Your Email' name='your_email' required />
            <textarea className='msg' name='message' rows='5' placeholder='Your message' required></textarea>
            <button type='submit' value='send' className='submitBtn'> Submit</button>
            <div className="links">
                <a href="https://www.linkedin.com/in/rutulbeladiya/" target='_blank' rel='noopner noreferrer' >
                  <img src={LinkedIn} alt="LinkedIn" className='link'  />
                </a>
                <a href="https://github.com/RutulBeladia" target='_blank' rel='noopner noreferrer' >
                  <img src={Github} alt="github" className='link' />
                </a>
                <a href="https://www.instagram.com/beingrutulbeladiya/" target='_blank' rel='noopner noreferrer' >
                  <img src={Instagram} alt="Instagram" className='link' />
                </a>
            </div>
        </form>
    </div>
  )
}

export default Contact