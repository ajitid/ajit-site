import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import Helmet from "react-helmet";

import Header from "./Header";
import "../css/global.css";

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={query}
    render={data => (
      <div className="px-3 lg:px-0 font-sans text-black-soft container mx-auto antialiased">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=PT+Sans"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"
            rel="stylesheet"
          />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>{children}</div>
        <footer className="py-10" />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
