import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const ToggleButton = ({ handleChange }) => (
  <form
    action=""
    className="l-roster-main__form c-choice-toggle"
    onChange={e => handleChange(e)}
  >
    <input
      type="radio"
      name="roster-choice"
      className="c-choice-toggle__input"
      id="all"
      defaultChecked
    />
    <label className="c-choice-toggle__label" htmlFor="all">
      All
    </label>

    <input
      type="radio"
      name="roster-choice"
      className="c-choice-toggle__input"
      id="wrestlers"
    />
    <label className="c-choice-toggle__label" htmlFor="wrestlers">
      Wrestlers
    </label>

    <input
      type="radio"
      name="roster-choice"
      className="c-choice-toggle__input"
      id="managers"
    />
    <label className="c-choice-toggle__label" htmlFor="managers">
      Managers
    </label>

    <input
      type="radio"
      name="roster-choice"
      className="c-choice-toggle__input"
      id="referees"
    />
    <label className="c-choice-toggle__label" htmlFor="referees">
      Referees
    </label>
  </form>
);

ToggleButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default ToggleButton;
