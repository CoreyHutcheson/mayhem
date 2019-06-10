import React from "react";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faImages, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./style.scss";

const ModalContent = ({
  title: name,
  image,
  description,
  quick_fact,
  nickname,
  location,
  champion,
  gallery,
  website,
  handleModalClose,
}) => (
  <div className="modal-container">
    <div className="modal-container__image">
      <Img fluid={image} alt={name} />
    </div>

    <div className="modal-container__info">
      <div className="modal-container__name">{name}</div>

      {nickname && <div className="modal-container__nickname">{nickname}</div>}

      {location && (
        <div className="modal-container__location">
          <span>Hometown:</span>
          {location}
        </div>
      )}

      {quick_fact && (
        <div className="modal-container__quick-fact">
          <span>Facts: </span>
          {quick_fact}
        </div>
      )}

      {description && (
        <div className="modal-container__description">
          <span>Description:</span>
          {description}
        </div>
      )}

      {champion && <div className="modal-container__champion">Belt</div>}

      {(gallery || website) && (
        <div className="modal-container__links">
          {gallery && (
            <FontAwesomeIcon
              className="modal-container__gallery"
              icon={faImages}
            />
          )}
          {website && (
            <a href={website}>
              <FontAwesomeIcon
                className="modal-container__website"
                icon={faGlobe}
              />
            </a>
          )}
        </div>
      )}
    </div>

    <FontAwesomeIcon
      className="modal-container__close-button"
      onClick={handleModalClose}
      icon={faTimes}
      size="2x"
    />
  </div>
);

ModalContent.propTypes = {
  title: PropTypes.string,
  image: PropTypes.object,
  description: PropTypes.string,
  quick_fact: PropTypes.string,
  nickname: PropTypes.string,
  location: PropTypes.string,
  champion: PropTypes.bool,
  gallery: PropTypes.array,
  website: PropTypes.string,
};

export default ModalContent;
