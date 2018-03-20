import React from 'react';
import Link from 'gatsby-link';
import { FaExternalLink, FaTag, FaArrowCircleRight } from 'react-icons/lib/fa';

import ladders from '../assets/images/portfolio/1800.jpg';
import diamondBack from '../assets/images/portfolio/dbf.jpg';
import forceUsa from '../assets/images/portfolio/force.jpg';
import ssg from '../assets/images/portfolio/ssg.jpg';
import lgl from '../assets/images/portfolio/lgl.jpg';
import lgx from '../assets/images/portfolio/lgx.jpg';
import shopifyXsells from '../assets/images/portfolio/shopify.jpg';
import silkn from '../assets/images/portfolio/silkn.jpg';

import Coffee from '../assets/images/portfolio/coffee.jpg';
import Console from '../assets/images/portfolio/console.jpg';
import Judah from '../assets/images/portfolio/judah.jpg';
import IntoTheLight from '../assets/images/portfolio/into-the-light.jpg';
import Farmerboy from '../assets/images/portfolio/farmerboy.jpg';
import Girl from '../assets/images/portfolio/girl.jpg';
import Origami from '../assets/images/portfolio/origami.jpg';
import Retrocam from '../assets/images/portfolio/retrocam.jpg';

const Portfolio = () => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Here are some sites I helped build.</h1>
        <h2>
          The Github Repositories do not belong to me and are private, so I have
          linked to the website or a page where I show my code if possible.
        </h2>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.1800ladders.com/" target="_blank">
                <img alt="" src={ladders} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>1800Ladders</h5>
                    <p>Ruby on Rails v4, React, Foundation</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.forceusa.com/" target="_blank">
                <img alt="" src={forceUsa} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Force USA</h5>
                    <p>Shopify (Slate build tool), React, Liquid, Sass</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.diamondbackfitness.com/" target="_blank">
                <img alt="" src={diamondBack} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>DiamondBack Fitness</h5>
                    <p>Ruby on Rails v5, Foundation, Haml, Sass</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.sizzlingsausagegrill.com/" target="_blank">
                <img alt="" src={ssg} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Johnsonville &ndash; Sizzling Sausage Grill</h5>
                    <p>Ruby on Rails v4, Haml, Sass</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.littlegiantladder.com/" target="_blank">
                <img alt="" src={lgl} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Little Giant Ladder</h5>
                    <p>
                      Shopify (upgraded &amp; ported from Magento), React,
                      Liquid, Stylus
                    </p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="https://www.littlegiantxtreme.com/" target="_blank">
                <img alt="" src={lgx} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Little Giant Xtreme</h5>
                    <p>Gulp static site, React, Sass</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-07" title="">
                <img alt="" src={silkn} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Silk'n (no longer live)</h5>
                    <p>Ruby on Rails v4, Foundation, Sass</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaExternalLink />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/shopify-cross-sells-app">
                <img alt="" src={shopifyXsells} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Shopify Cross-sells app for LGL</h5>
                    <p>Shopify API, React, Redux, Express, Shopify Polaris</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaArrowCircleRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
