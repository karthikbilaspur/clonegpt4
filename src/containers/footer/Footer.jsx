
import React from 'react';
import gpt4 from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt4__footer section__padding">
    <div className="gpt4__footer-heading">
      <h1 className="gradient__text">Step into future before others can do it. If not you someone will definitely do it. </h1>
    </div>

    <div className="gpt4__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt4__footer-links">
      <div className="gpt4__footer-links_logo">
        <img src={gpt4Logo} alt="gpt4_logo" />
        <p>Karhik, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt4__footer-links_div">
        <h4>Get in touch</h4>
        <p>Karthik</p>
        <p>7693938800</p>
        <p>karthikv81291@gmail.com</p>
      </div>
    </div>

    <div className="gpt4__footer-copyright">
      <p>@2024 CLONEGPT4 All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
