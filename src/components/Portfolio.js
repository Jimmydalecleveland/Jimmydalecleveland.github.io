import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { FaExternalLink, FaTag, FaArrowCircleRight } from 'react-icons/lib/fa';

const Portfolio = ({ imgData }) => (
  <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h3>Here are some sites I helped build.</h3>
        <h4>
          The Github Repositories do not belong to me and are private, so I have
          linked to the website or a page where I show my code if possible.
        </h4>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <Link to="/shopify-cross-sells-app">
                <Img
                  className="project-img"
                  sizes={imgData.shopifyXsells.sizes}
                  alt=""
                />
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

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a
                href="https://www.1800ladders.com/"
                target="_blank"
                rel="noopener"
              >
                <Img
                  className="project-img"
                  sizes={imgData.ladders.sizes}
                  alt=""
                />
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
              <a
                href="https://www.forceusa.com/"
                target="_blank"
                rel="noopener"
              >
                <Img
                  className="project-img"
                  sizes={imgData.forceUsa.sizes}
                  alt=""
                />
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
              <a
                href="https://www.diamondbackfitness.com/"
                target="_blank"
                rel="noopener"
              >
                <Img
                  className="project-img"
                  sizes={imgData.diamondBack.sizes}
                  alt=""
                />
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
              <a
                href="https://www.sizzlingsausagegrill.com/"
                target="_blank"
                rel="noopener"
              >
                <Img className="project-img" sizes={imgData.ssg.sizes} alt="" />
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
              <a
                href="https://www.littlegiantladder.com/"
                target="_blank"
                rel="noopener"
              >
                <Img className="project-img" sizes={imgData.lgl.sizes} alt="" />
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
              <a
                href="https://www.littlegiantxtreme.com/"
                target="_blank"
                rel="noopener"
              >
                <Img className="project-img" sizes={imgData.lgx.sizes} alt="" />
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
              <Link to="/silkn">
                <Img
                  className="project-img"
                  sizes={imgData.silkn.sizes}
                  alt=""
                />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Silk'n (no longer live)</h5>
                    <p>Ruby on Rails v4, Foundation, Sass</p>
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
