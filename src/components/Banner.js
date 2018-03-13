import React from 'react';
import SocialLinks from './SocialLinks';

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">Hello, I'm Jimmy Cleveland.</h1>
      <h3>
        I do <span>frontend development</span>, with a preference for{' '}
        <span>Javascript</span>, <span>Node</span>, and <span>React</span>.
        <a className="smoothscroll" href="#about">
          {' '}
          start scrolling
        </a>{' '}
        and learn more
        <a className="smoothscroll" href="#about">
          {' '}
          about me
        </a>.
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
