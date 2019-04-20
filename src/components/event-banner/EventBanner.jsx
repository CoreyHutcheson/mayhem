import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const EventBanner = ({ title, slug }) => (
  <div className="featured-notification">
    <FontAwesomeIcon icon={faStar} size="1x" />
    <Link to={`/event/${slug}`} className="featured-notification__link">
      <span>Featured:</span>
      <span className="featured-notification__title">{title}</span>
    </Link>
    <FontAwesomeIcon icon={faStar} size="1x" />
  </div>
);

EventBanner.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};

export default EventBanner;
