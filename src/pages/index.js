import React from 'react';
import Link from 'gatsby-link';

import '../assets/css/main.css';
import '../assets/css/nav.css';

import Header from '../components/Header';
import About from '../components/About';
import Resume from '../components/Resume';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';

const IndexPage = ({ data }) => (
  <div>
    <Header />
    <About profileImg={data.profile} />
    <Resume />
    <Portfolio imgData={data} />
    <Footer />
  </div>
);

export const pageQuery = graphql`
  query PortfolioImagesQuery {
    profile: imageSharp(id: { regex: "/profilepic.jpg/" }) {
      sizes(maxWidth: 200) {
        ...GatsbyImageSharpSizes
      }
    }
    ladders: imageSharp(id: { regex: "/1800.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    diamondBack: imageSharp(id: { regex: "/dbf.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    forceUsa: imageSharp(id: { regex: "/force.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    ssg: imageSharp(id: { regex: "/ssg.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    lgl: imageSharp(id: { regex: "/lgl.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    lgx: imageSharp(id: { regex: "/lgx.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    shopifyXsells: imageSharp(id: { regex: "/shopify.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
    silkn: imageSharp(id: { regex: "/silkn.jpg/" }) {
      sizes(maxWidth: 215) {
        ...GatsbyImageSharpSizes_tracedSVG
      }
    }
  }
`;

export default IndexPage;
