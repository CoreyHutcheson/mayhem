import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const MenuToggleBtn = ({ menuExpanded, handleClick }) => {
  let classes = "menu-toggle-btn site-header__menu-toggle-btn";

  return (
    <div
      className={menuExpanded ? `${classes} js-menu-is-open` : classes}
      aria-controls="site-navigation"
      aria-expanded={menuExpanded}
      onClick={handleClick}
    >
      <span />
      <span />
      <span />
    </div>
  );
};

MenuToggleBtn.propTypes = {
  menuExpanded: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default MenuToggleBtn;
