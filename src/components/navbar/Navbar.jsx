import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt4__navbar">
      <div className="gpt4__navbar-links">
        <div className="gpt4__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="gpt4__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#CLONEGPT4">What is gpt4?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt4__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt4__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={24} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={24} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt4__navbar-menu_container scale-up-center">
          <div className="gpt4__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#CLONEGPT4">CLONEGPT4</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Features</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt4__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;