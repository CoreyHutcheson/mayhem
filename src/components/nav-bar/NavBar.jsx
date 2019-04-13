import React, { useState } from "react";

import Logo from "./logo";
import MenuToggleBtn from "./menu-toggle-btn";
import NavMenu from "./nav-menu";

import "./style.scss";

const NavBar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false);

  const handleClick = () => {
    setMenuExpanded(prev => !prev);
  };

  return (
    <>
      <Logo />
      <MenuToggleBtn menuExpanded={menuExpanded} handleClick={handleClick} />
      <NavMenu menuExpanded={menuExpanded} />
    </>
  );
};

export default NavBar;
