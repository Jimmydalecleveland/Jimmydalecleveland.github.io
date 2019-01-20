import React from 'react';

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Clearlink</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">Jul 2018 &ndash; Present</em>
          </p>

          <p>I work on the CMS team within Marketing Technologies department, building the system that content editors and frontend developers will use to create and update consumer facing websites. The current tech-stack we are using consists of: React, Gatsby, Gutenberg, Golang, Lerna for the Monorepo, Jest for testing, and Docz for the living styleguide.</p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>Net Media Group</h3>
          <p className="info">
            Frontend Web Developer
            <span>&bull;</span>
            <em className="date">Dec 2013 - May 2018</em>
          </p>

          <p>
            At NMG I have worked on a small team, building and maintaining
            websites for over 14 companies, using various frameworks such as
            Magento, Wordpress, Ruby on Rails, and most recently Shopify. Some
            were simple, single product, landing pages while the majority were
            larger E-commerce sites.
          </p>
          <p>
            With such a wide variety of clients I've had the opportunity to
            learn many tools while rapidly increasing my troubleshooting skills.
            I work closely with our backend developer and our designer, allowing
            me to become very familiar with the needs of other departments.
          </p>
          <p>
            I'm no stranger to urgent last minute deadlines, and I am skilled at
            coming up with solutions to keep the project on track. I'm very
            comfortable explaining technical limitations and risks to my
            superiors and clients, while working through alternatives to
            accomplish their objectives.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <p className="info">
            Intern, Frontend Web Developer
            <span>&bull;</span>
            <em className="date">Aug 2013 - Dec 2013</em>
          </p>
          <p>
            Starting out, most of my hours were spent on A/B tests using
            Optimizely for existing sites with some minor changes while I
            learned the company's process. Once I got my bearings, I started
            asking if we could test into more responsive designs, as the company
            only built for desktop at the time.
          </p>
          <p>
            In my off hours I worked on mockups to show how we could make our
            sites mobile-friendly, among other general improvements to our
            worfklow. For example, I spent a week learning more about Git and
            scheduled a demonstration for the developers to show how it was most
            commonly used in the industry and how we could benefit from adapting
            best practices. When I was hired on fulltime, I was told that my
            enthusiasm for pushing new ideas was a major factor in being hired.
          </p>
        </div>
      </div>

      <div className="row item">
        <div className="twelve columns">
          <h3>United States Air Force</h3>
          <p className="info">
            Munitions Systems &amp; Safety Expert
            <span>&bull;</span>
            <em className="date">Jul 2004 &ndash; Jan 2009</em>
          </p>

          <p>
            The military did not directly contribute to my development skills,
            but it tought me self-discipline when following orders, and how to
            lead. It is often an extremely stressful career, and a lot of
            character development occurs during the consistant difficulties you
            face. This made me well-equipped to deal with the challenges I've
            faced in programming.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
