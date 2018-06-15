import React from 'react';
import Img from 'gatsby-image';
import { FaCloudDownload } from 'react-icons/lib/fa';

import resume from './../assets/images/Resume.pdf';

const About = ({ profileImg }) => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <Img className="profile-pic" sizes={profileImg.sizes} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I've been a computer enuthusiast most of my life. When I was young, I
          would stay up all night working on my music videos in Adobe Premiere,
          saving every 10 minutes to avoid losing all my data in a program crash
          (despite it taking 2 minutes each save). Things have gotten a lot
          better in that realm, and I have been eagerly awaiting each upgrade to
          computer hardware. Naturally I transitioned into gaming, which I still
          do on occasion but not nearly as fanatically as I did in my youth.
        </p>
        <p>
          Lately I've switched to a lot of off-computer hobbies, like guitar,
          camping and reading. I mostly read fiction, particularly grimdark
          fantasy. I'm also a follower of Neuroscience, Psychology, and
          Philosophy so I read books on those topics as well. I'm super hyped
          about VR, and own a Vive and an Oculus Rift.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Jimmy Cleveland</span>
              <br />
              <span>(801)452-3265</span>
              <br />
              <span>jimmydalecleveland@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href={resume} className="button">
                <FaCloudDownload /> PDF Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
