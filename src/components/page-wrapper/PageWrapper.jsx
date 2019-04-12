import React from "react";
import PropTypes from "prop-types";

import NavBar from "src/components/nav-bar";
import Footer from "src/components/footer";

const PageWrapper = ({ children }) => (
  <>
    <header>
      <NavBar />
    </header>
    <main>{children}</main>
    <Footer />
  </>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
