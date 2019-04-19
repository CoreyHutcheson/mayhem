import React from "react";

import "./style.scss";

const EventContent = ({ useCardDetails, cardDetails, extraCardDetails }) => {
  if (!useCardDetails) return null;

  return (
    <div className="event__content">
      {cardDetails.map((match, index) => {
        if (match.match_description) {
          return (
            <React.Fragment key={index}>
              <div className="event__match-description">
                {match.match_description}
              </div>
              <div className="event__match">{match.match}</div>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={index}>
              <div className="event__match">{match.match}</div>
            </React.Fragment>
          );
        }
      })}

      {extraCardDetails ? (
        <div className="event__extra-card-details">{extraCardDetails}</div>
      ) : null}
    </div>
  );
};

export default EventContent;
