import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt4__header section__padding" id="home">
    <div className="gpt4__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with CLONEGPT-4 </h1>
      <p>Increases the productivity by 100X, Faster, Secure than any of present technology</p>

      <div className="gpt4__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt4__header-content__people">
        <img src={people} />
        <p>Time running out already 50000 People have registered for it in less than 12 hours</p>
      </div>
    </div>

    <div className="gpt4__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;