import React from "react";

import FooterPanel from "./footer-panel";
import "./style.scss";

const Footer = () => (
  <footer className="site-footer">
    <FooterPanel title="location">
      <p>300 E James Campbell Blvd</p>
      <p>Columbia, TN 38401</p>
    </FooterPanel>

    <FooterPanel title="contact">
      <p>Tel: (931) 698 - 2090</p>
    </FooterPanel>

    <FooterPanel title="hours">
      <p>Doors Open - 7pm</p>
      <p>Show Starts - 8pm</p>
    </FooterPanel>
  </footer>
);

export default Footer;
