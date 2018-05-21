import React from 'react';
import smoothscroll from 'smoothscroll';

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" />
    <ul id="nav" className="nav">
      <li className="current">
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#portfolio">Projects</a>
      </li>
      <li>
        <a
          href="https://github.com/Jimmydalecleveland"
          target="_blank"
          rel="noopener"
        >
          Github
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
