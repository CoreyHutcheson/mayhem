import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-brands-svg-icons";
import { Link } from "gatsby";

import "./style.scss";

const EventBanner = () => (
  <div className="featured-notification">
    <FontAwesomeIcon icon={faStar} size="1x" />
    <Link to="" className="featured-notification__link">
      <span>Featured:</span>
      <span>August 17, 2019</span>
    </Link>
    <FontAwesomeIcon icon={faStar} size="1x" />
  </div>
);

export default EventBanner;
