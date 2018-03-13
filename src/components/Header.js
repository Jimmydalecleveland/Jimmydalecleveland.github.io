import React from 'react';

import Navigation from './Navigation';
import Banner from './Banner';
import ScrollDown from './ScrollDown';

const Header = () => (
  <header id="home" className="header">
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
