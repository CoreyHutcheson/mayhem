import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faImages } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const Icon = ({ desc, link, icon, newWindow = false }) => (
  <div className={`c-roster-card__${desc}`}>
    <a href={link} target={newWindow ? "_blank" : "_self"}>
      <FontAwesomeIcon icon={icon} size="2x" />
    </a>
  </div>
);

const Field = ({ desc, children }) => (
  <div className={`c-roster-card__${desc}`}>{children}</div>
);

const Card = ({ image, title, acf }) => {
  return (
    <div className="c-roster-card">
      <div className="c-roster-card__image-container">
        <Img fluid={image} alt={title} />
      </div>

      <div className="c-roster-card__info">
        <Field desc="name">{title}</Field>

        {acf.location && <Field desc="location">{acf.location}</Field>}

        {acf.champion && <Field desc="champion">Belt</Field>}

        {acf.website && (
          <Icon
            desc="website"
            link={acf.website}
            icon={faGlobe}
            newWindow={true}
          />
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  acf: PropTypes.object,
};

export default Card;
