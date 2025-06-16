import React from 'react'
import './Contact.css'
import instagram from '../../assets/images/instagram.png'
import github from '../../assets/images/github.png'
import linkedin from '../../assets/images/linkedin.png'
import contact from '../../assets/images/contact.png'

function Contact() {
  return (
    <div id='contact'> 
    <div className="leftcontact">
      <img src={contact} alt="" />
    </div>

    <div className="rightcontact">
      
      <form action="https://formspree.io/f/xovwwyjg" method="POST">
        <input type="text" name="user name" placeholder='Name' />
        <input type="email" name ='email' placeholder='Email' />
        <textarea name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
        <button className='button1' type="submit">Send</button>
      </form>
    </div>
    <div className="footer">
      
        <img src={instagram} alt="" />
      <a href="https://github.com/samircahudhary"> <img src={github} alt="" /></a> 
      <a href="www.linkedin.com/in/samir-chaudhary-77b42a321">  <img src={linkedin} alt="" /></a>
    </div>
    </div>
  )
}

export default Contact