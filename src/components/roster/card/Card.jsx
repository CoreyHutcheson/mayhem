import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faImages } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const Icon = ({ desc, link, icon, newWindow = false }) => (
  <div className={`c-roster-card__${desc}`}>
    <a href={link} target={newWindow ? "_blank" : "_self"}>
      <FontAwesomeIcon icon={icon} />
    </a>
  </div>
);

const Field = ({ desc, children }) => (
  <div className={`c-roster-card__${desc}`}>{children}</div>
);

const Card = ({ image, title, acf, openModal }) => {
  return (
    <div className="c-roster-card">
      <div className="c-roster-card__image-container">
        <Img fluid={image} alt={title} />
      </div>

      <div className="c-roster-card__info">
        <Field desc="name">{title}</Field>

        {acf.location && <Field desc="location">{acf.location}</Field>}

        {acf.champion && <Field desc="champion">Belt</Field>}

        {(acf.gallery || acf.website) && (
          <Field desc="links">
            {acf.gallery && (
              <Icon desc="gallery-link" link="#0" icon={faImages} />
            )}

            {acf.website && (
              <Icon desc="website" link="#0" icon={faGlobe} newWindow={true} />
            )}
          </Field>
        )}
      </div>

      <div
        className="c-roster-card__hover-element"
        onClick={() => openModal(title, image, acf)}
      >
        More
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
