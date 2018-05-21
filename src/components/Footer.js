import React from 'react';
import SocialLinks from './SocialLinks';
import { FaChevronCircleUp } from 'react-icons/lib/fa';

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <SocialLinks />

        <ul className="copyright">
          <li>&copy; Copyright 2018 Jimmy Cleveland</li>
          <li>Developed using a Gatsby template &amp; React.</li>
        </ul>
      </div>

      <div id="go-top">
        <a
          title="Back to Top"
          href="#home"
          aria-label="Go back to the top of this page"
        >
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
