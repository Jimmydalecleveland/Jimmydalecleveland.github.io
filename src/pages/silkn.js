import React, { Component } from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import Footer from '../components/Footer';

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
                  <Img
                    className="project-img"
                    sizes={this.props.data.silknHome.sizes}
                    alt=""
                  />
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
              <Img
                className="project-img"
                sizes={this.props.data.silknFlash.sizes}
                alt=""
              />
              <h3>FaceFX landing page</h3>
              <Img
                className="project-img"
                sizes={this.props.data.silknFacefx.sizes}
                alt=""
              />
              <h3>
                Checkout - I had to build a new responsive cart &amp; checkout
                for this site
              </h3>
              <Img
                className="project-img"
                sizes={this.props.data.silknCheckout.sizes}
                alt=""
              />
              <h3>Pedi Pro landing page</h3>
              <Img
                className="project-img"
                sizes={this.props.data.silknPedi.sizes}
                alt=""
              />
              <h3>ReVit landing page</h3>
              <Img
                className="project-img"
                sizes={this.props.data.silknRevit.sizes}
                alt=""
              />
              <h3>Titan landing page</h3>
              <Img
                className="project-img"
                sizes={this.props.data.silknTitan.sizes}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query SilknImagesQuery {
    silknHome: imageSharp(id: { regex: "/silkn-home-responsive.png/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silknRevit: imageSharp(id: { regex: "/silkn-revit.jpg/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silknPedi: imageSharp(id: { regex: "/silkn-pedi.jpg/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silknTitan: imageSharp(id: { regex: "/silkn-titan.jpg/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silknFlash: imageSharp(id: { regex: "/silkn-flash-responsive.png/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silknFacefx: imageSharp(id: { regex: "/silkn-facefx.jpg/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silknCheckout: imageSharp(id: { regex: "/silkn-checkout.jpg/" }) {
      sizes(maxWidth: 980) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

export default Project;
