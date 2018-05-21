import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/lib/fa';
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a
        href="https://www.linkedin.com/in/jimmy-cleveland-41625442/"
        target="_blank"
        rel="noopener"
        aria-label="See my linkedIn page"
      >
        <FaLinkedin />
      </a>
    </li>
    <li>
      <a
        href="https://github.com/Jimmydalecleveland"
        target="_blank"
        rel="noopener"
        aria-label="See my Github Profile"
      >
        <FaGithub />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
