import React from 'react'
import './Contact.css'

import {CgMail} from 'react-icons/cg'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

import  { useRef } from 'react';
import emailjs from '@emailjs/browser'

import Hr from '../Hr'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rq31way', 'template_ehz8v68', form.current, 'm-9R_HkRj7ZSXkFMr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <>
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <CgMail className='contact_option-icon email'/>
            <h4>Email</h4>
            <h5>felixwebbo.java@gmail..</h5>
            <a href='mailto:felixwebbo.java@gmail.com' target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsMessenger className='contact_option-icon mess'/>
            <h4>Messenger</h4>
            <h5>Felaferer ZakWebbo</h5>
            <a href='https://m.me/photo.php?fbid=693866569309111&set=a.305682961460809&type=3&comment_id=790026333124000&force_theater=true' target='_blank'>Send a Message</a>
          </article>

          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon whats'/>
            <h4>whatsApp</h4>
            <h5>felixwebbo.java@gmail..</h5>
            <a href='https://api.whatsapp.com/send?phone=+254113323746' target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}> 
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
    <Hr/>
    </>
  )
}

export default Contact
