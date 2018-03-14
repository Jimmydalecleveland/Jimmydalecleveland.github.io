import React from 'react';

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Weber State University</h3>
          <p className="info">
            BS Degree in Software Engineering
            <span>&bull;</span>
            <em className="date">Jul 2010 &ndash; Dec 2013</em>
          </p>
          The program emphasized languages such as C++, C#, Java, and SQL.
          Toward the end of my degree I realized Web Technologies were the most
          interesting to me, so I filled all my elective spots with web-focused
          courses and spent my free time learning them.
          <p />
        </div>
      </div>
    </div>
  </div>
);

export default Education;
