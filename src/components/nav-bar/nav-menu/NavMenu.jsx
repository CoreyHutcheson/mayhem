import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faYoutube,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./style.scss";

const ListItem = ({ link, title }) => (
  <li className="nav-menu__list-item">
    <Link to={link} className="nav-menu__link">
      {title}
    </Link>
  </li>
);

const FontAwesomeListItem = ({ link, icon }) => (
  <li className="nav-menu__list-item">
    <Link to={link} className="nav-menu__link">
      <FontAwesomeIcon icon={icon} size="1x" />
    </Link>
  </li>
);

const NavMenu = ({ menuExpanded }) => {
  let classes = "main-navigation site-header__nav";

  return (
    <nav
      id="site-navigation"
      className={menuExpanded ? `${classes} is-toggled` : classes}
    >
      <ul
        id="menu-primary-menu-links"
        className="nav-menu main-navigation__menu"
        aria-expanded="false"
      >
        <ListItem link="/roster" title="Roster" />
        <ListItem link="/gallery" title="Gallery" />
        <ListItem link="/about" title="About" />
      </ul>
      <ul
        id="menu-social-menu-links"
        className="nav-menu main-navigation__menu"
        aria-expanded="false"
      >
        <FontAwesomeListItem link="www.facebook.com" icon={faFacebookSquare} />
        <FontAwesomeListItem
          link="https://www.youtube.com/channel/UCsKdL88vDNqTdltcQztf6NA/featured"
          icon={faYoutube}
        />
        <FontAwesomeListItem link="http://www.twitter.com" icon={faTwitter} />
        <FontAwesomeListItem
          link="http://www.instagram.com"
          icon={faInstagram}
        />
      </ul>
    </nav>
  );
};

export default NavMenu;
