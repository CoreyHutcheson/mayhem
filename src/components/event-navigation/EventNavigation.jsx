import React from "react";
import PropTypes from "prop-types";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

import EventNavButton from "./event-nav-button";
import "./style.scss";

const EventNavigation = ({ prevEvent, nextEvent }) => (
  <div className="event-navigation">
    {prevEvent ? (
      <EventNavButton
        direction="left"
        link={prevEvent}
        icon={faBackward}
        text="Prev"
      />
    ) : null}

    {nextEvent ? (
      <EventNavButton
        direction="right"
        link={nextEvent}
        icon={faForward}
        text="Next"
      />
    ) : null}
  </div>
);

EventNavigation.propTypes = {
  prevEvent: PropTypes.string,
  nextEvent: PropTypes.string,
};

export default EventNavigation;
