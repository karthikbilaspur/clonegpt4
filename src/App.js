import React from 'react';

import { Footer, Blog, Possibility, Features, CLONEGPT4, Header } from './containers';
import { Comb, Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <CLONEGPT4 />
    <Features />
    <Possibility />
    <Comb />
    <Blog />
    <Footer />
  </div>
);

export default App;