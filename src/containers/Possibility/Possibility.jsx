import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt4__possibility section__padding" id="possibility">
    <div className="gpt4__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt4__possibility-content">
      <h4>Get early access along with coupon code of GP12A. Use it today, cherish the result tomorrow</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Dont stop yourself from exploring the future. This is something you wont want to miss out. </p>
      <h4>Get early access along with coupon code of GP12A. Use it today, cherish the result tomorrow</h4>
    </div>
  </div>
);

export default Possibility;