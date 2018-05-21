import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { siteMetadata } from '../../gatsby-config';
import favicon from './../assets/favicon.ico';
try {
  import lazySizes from 'lazysizes';
} catch (err) {
  console.error(err);
}

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <meta name="description" content="Jimmy Cleveland's Portfolio Site" />
      <meta name="author" description={siteMetadata.author} />
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
