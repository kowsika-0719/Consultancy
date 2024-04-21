import React from 'react';
import './Contact.css';
import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';



const Contact = () => {
 


  return (
   
    <div  className="contact-container">
      <h5 className='animated-underline'>Contact Us </h5>
      <form >
      <div className="input-row">
        <input type="text" name="user name" placeholder="  Your Name" required className="name-input" />
        <input type="text"  name ="contact no" placeholder="  Contact No" required className="contact-input" />
      </div>
      <div className="input-row">
        <input type="text" name ="email" placeholder="  Email" required className="email-input" />
        <input type="text" name ="sub" placeholder="  Subject" required className="sub-input" />
      </div>
      <div className="input-row">
        <input type="text" name ="message" placeholder="  Message" required className="msg-input" />
      </div>
      <div className="button-container">
        <a href="/Home">
        <button type="submit" className="submit-button">Send Message</button>
        </a>
      </div>
      </form>

    </div>
  );
};

export default Contact;
