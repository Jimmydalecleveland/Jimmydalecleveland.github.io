import React from 'react';

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        I make it my hobby to learn new technologies and tools as they surface,
        but here is a short list of some skills I have the most experience with:
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand html5-css3" />
            <em>HTML5 & CSS3</em>
          </li>
          <li>
            <span className="bar-expand illustrator" />
            <em>Pure Javascript (including es6)</em>
          </li>
          <li>
            <span className="bar-expand wordpress" />
            <em>React.js</em>
          </li>
          <li>
            <span className="bar-expand css" />
            <em>Gulp</em>
          </li>
          <li>
            <span className="bar-expand html5" />
            <em>Webpack</em>
          </li>
          <li>
            <span className="bar-expand nodejs" />
            <em>Node.js</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
