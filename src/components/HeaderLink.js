import React from "react";
import { Link as GLink } from "gatsby";

const HeaderLink = props => (
  <GLink
    activeClassName="header-link-active"
    className="header-link no-underline ml-4 text-black-soft"
    {...props}
  />
);

export default HeaderLink;
