import React, { Component } from 'react';
import Link from 'gatsby-link';
import Footer from '../components/Footer';

import homeResponsive from './../assets/images/portfolio/silkn-home-responsive.png';
import revitTop from './../assets/images/portfolio/silkn-revit.jpg';
import pediTop from './../assets/images/portfolio/silkn-pedi.jpg';
import titanTop from './../assets/images/portfolio/silkn-titan.jpg';
import flashResponsive from './../assets/images/portfolio/silkn-flash-responsive.png';
import facefxTop from './../assets/images/portfolio/silkn-facefx.jpg';
import checkout from './../assets/images/portfolio/silkn-checkout.jpg';

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
              <div className="row">
                <div className="twelve columns">
                  <p>
                    Originally built on Magento around the time I started at Net
                    Media Group, Silk'n was one of my longest running and most
                    challenging projects. My team ended up porting it to Rails,
                    with a redesign, due to the constant custom features that
                    the client requested. Magento made many of these additions
                    very difficult and time-consuming to implement, so we
                    decided to build a ground-up site for future-proof
                    flexibility. One of the largest updates was the responsive
                    overhaul I proposed. I supported this proposal with data
                    from Google Analytics that I had been compiling which showed
                    rapidly increasing mobile traffic. Mobile user percentage
                    was as high as 65% at one point after the redesign.
                  </p>
                  <img className="lazyload" data-src={homeResponsive} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-section">
          <div className="row">
            <div className="twelve columns">
              <h3>Flash &amp; GO landing page, the Silk'n flagship product.</h3>
              <p>
                <strong>
                  Left to right demo sizes are Desktop, iPad, Galaxy S7.
                </strong>{' '}
                The page went through countless iterations and tests throughout
                its life. There were many other models that came and went under
                this product line. Our designer and I had to prove each time
                that a narrowed down decision (in this case 2 models) was better
                than too many options, which creates a decision overload and
                higher bounce rate. We worked together to create several
                different designs that we could A/B test to show evidence for
                our claims, and eventually convinced the client, which resulted
                in a more profitable page that everyone was happy with.
              </p>
              <img className="lazyload" data-src={flashResponsive} alt="" />
              <h3>FaceFX landing page</h3>
              <img className="lazyload" data-src={facefxTop} alt="" />
              <h3>
                Checkout - I had to build a new responsive cart &amp; checkout
                for this site
              </h3>
              <img className="lazyload" data-src={checkout} alt="" />
              <h3>Pedi Pro landing page</h3>
              <img className="lazyload" data-src={pediTop} alt="" />
              <h3>ReVit landing page</h3>
              <img className="lazyload" data-src={revitTop} alt="" />
              <h3>Titan landing page</h3>
              <img className="lazyload" data-src={titanTop} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
