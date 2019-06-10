import React from "react";
import PropTypes from "prop-types";

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
}) => <div>{name}</div>;

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
