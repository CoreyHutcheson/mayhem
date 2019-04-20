import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

import "./style.scss";

const EventNavButton = ({ direction, link, icon, text }) => {
  return (
    <div className={`event-navigation__${direction}-link`}>
      <Link to={`/event/${link}`} title={link}>
        <div className="event-navigation__button">
          {direction === "right" ? <span>{text}</span> : null}
          <FontAwesomeIcon icon={icon} size="1x" />
          {direction === "left" ? <span>{text}</span> : null}
        </div>
      </Link>
    </div>
  );
};

EventNavButton.propTypes = {
  direction: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

export default EventNavButton;
