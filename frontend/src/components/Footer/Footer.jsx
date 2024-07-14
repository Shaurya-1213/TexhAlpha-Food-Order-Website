import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <h1 className='main-title'>Foodies</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perspiciatis, exercitationem tempore at ullam reiciendis ipsam ut itaque sint dolorem earum assumenda neque eligendi. Quo.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div> 
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li><a href='#header'>Home</a></li>
            <li><a href='#footer'>Contact Us</a></li>
            <li><a href=''>Delivery</a></li>
            <li><a href=''>Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+919336863233</li>
            <li>fooddelivery@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Foodies.com -All Rights Reserved.
      </p>

    </div>
  )
}

export default Footer