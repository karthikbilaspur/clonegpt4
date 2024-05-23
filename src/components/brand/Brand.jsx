import React from 'react';
import { amazon, facebook, dropbox, apple, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={amazon} />
    </div>
    <div>
      <img src={facebook} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={apple} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;