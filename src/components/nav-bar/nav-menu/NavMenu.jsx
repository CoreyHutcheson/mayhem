import React from "react";
import { Link } from "gatsby";

import "./style.scss";

const ListItem = ({ title }) => (
  <li className="nav-menu__list-item">
    <Link to={title.toLowerCase()} className="nav-menu__link">
      {title.charAt(0).toUpperCase() + title.substring(1)}
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
        <ListItem title="roster" />
        <ListItem title="gallery" />
        <ListItem title="about" />
      </ul>
      <ul
        id="menu-social-menu-links"
        className="nav-menu main-navigation__menu"
        aria-expanded="false"
      >
        <ListItem title="f" />
        <ListItem title="y" />
        <ListItem title="t" />
        <ListItem title="i" />
      </ul>
    </nav>
  );
};

export default NavMenu;
