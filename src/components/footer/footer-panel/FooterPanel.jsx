import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const FooterPanel = ({ title, children }) => (
  <section className="site-footer__panel">
    <h2 className="site-footer__title">{title}</h2>
    <div>{children}</div>
  </section>
);

FooterPanel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default FooterPanel;
