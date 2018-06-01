import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';
import favicon from './../assets/favicon.ico';
import unfurl from './../assets/images/jimmydc_unfurl.jpg';
import lazySizes from 'lazysizes';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content="Jimmy Cleveland's Portfolio Site" />
      <meta name="author" description={siteMetadata.author} />
      <meta
        property="og:title"
        content="Jimmy Cleveland's Developer Portfolio"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="http://jimmydc.com/" />
      <meta property="og:image" content={unfurl} />
      <title>{siteMetadata.title}</title>
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
