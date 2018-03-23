import React, { Component } from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';

import introImage from './../assets/images/portfolio/shopify-intro.jpg';

import './../assets/css/project.css';
import './../vendor/prism.js';
import './../vendor/prism.css';

class Project extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return (
      <div>
        <div id="home" className="project-section project-section-top">
          <div className="row">
            <div className="twelve columns">
              <Link to="/">&lt; Back to Home</Link>
              <h1>Silk'n US Website</h1>
              <h2>
                Features:
                <span className="tag">Ruby on Rails 4</span>
                <span className="tag">Foundation 5</span>
                <span className="tag">HAML</span>
                <span className="tag">SCSS</span>
                <span className="tag">Gulp</span>
                <span className="tag">Underscore.js</span>
              </h2>
              <img src={introImage} alt="" />
              <p>
                Originally built on Magento around the time I started at Net
                Media Group, Silk'n was one of my longest running and most
                challenging projects. My team ended up porting it to Rails due
                to the constant custom features that the client requested.
                Magento made many of these asks very difficult and time
                consuming to implement, and we were already familiar with Rails
                from other projects. It also got a huge responsive overhaul from
                me during the port, after I showed the rapidly growing mobile
                traffic through Google Analytics. Mobile user percentage was as
                high as 65% at one point.
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="row">
            <div className="twelve columns">
              <p className="pre-code-explanation">
                To me it makes the most sense to start with the actions
                controller then move to its associated reducer. Here is the
                final product actions file. If you are unfamiliar with using{' '}
                <span className="short-code">dispatch</span> within a{' '}
                <span className="short-code">dispatch</span>, it is the syntax
                for using thunk middleware. A thunk wraps an expression to delay
                it, which is particularly useful during an API request in which
                you need to update your state when it completes.{' '}
                <a href="https://github.com/gaearon/redux-thunk#composition">
                  Here
                </a>{' '}
                is a good explanation from the Github source.
              </p>
              <p>
                It took me a good while to get my head around the concept
                originally. I had a difficult time finding examples of Redux API
                fetches (crazy, I know) so when I learned this was a common
                practice for it I decided to give it a whirl.
              </p>
              <pre className="language-jsx">
                <code className="language-jsx" />
              </pre>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
