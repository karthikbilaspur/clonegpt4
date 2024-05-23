import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Suceess in AI',
    text: 'Success in creating AI would be the biggest event in human history..',
  },
  {
    title: 'Difficult to think of World Without AI',
    text: 'It is difficult to think of a major industry that AI will not transform. This includes healthcare, education, transportation, retail, communications, and agriculture. .',
  },
  {
    title: 'AI Driven',
    text: 'If our era is the next Industrial Revolution, as many claim, AI is surely one of its driving forces.',
  },
  {
    title: 'Couping and embracing AI',
    text: 'What all of us have to do is to make sure we are using AI in a way that is for the benefit of humanity, not to the detriment of humanity...',
  },
];

const Features = () => (
  <div className="gpt4__features section__padding" id="features">
    <div className="gpt4__features-heading">
      <h1 className="gradient__text">The Future is Now, Step Today. & Make it Happen.</h1>
      <p>Get Started</p>
    </div>
    <div className="gpt4__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;