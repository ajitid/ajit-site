import React from "react";
import PropTypes from "prop-types";

import HeaderLink from "./HeaderLink";

const Header = ({ siteTitle }) => (
  <header className="flex justify-between py-10 text-lg font-serif">
    <div>{siteTitle}</div>
    <div>
      <nav>
        <HeaderLink to="/projects">Projects</HeaderLink>
        <HeaderLink to="/blog">Blog</HeaderLink>
        <HeaderLink to="/">About</HeaderLink>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
