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
        I make it my hobby to learn new frameworks and tools as they surface.
        While I have many modern technologies in my toolbelt, here is a short
        list of skills I have the most experience with:
      </p>

      <div className="bars">
        <ul className="skills">
          <li>
            <span className="bar-expand react" />
            <em>React.js</em>
          </li>
          <li>
            <span className="bar-expand javascript" />
            <em>Javascript (including es6+)</em>
          </li>
          <li>
            <span className="bar-expand html5-css3" />
            <em>HTML5 &amp; CSS3 (including css grid &amp; flexbox)</em>
          </li>
          <li>
            <span className="bar-expand gulp-webpack" />
            <em>Gulp / Webpack</em>
          </li>
          <li>
            <span className="bar-expand foundation-bootstrap" />
            <em>Responsive Design and Development</em>
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
