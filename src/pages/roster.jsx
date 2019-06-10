import React, { useState } from "react";

import PageWrapper from "src/components/page-wrapper";
import ToggleButton from "src/components/roster/toggle-button";
import Card from "src/components/roster/card";

import { useRoster } from "src/utils/js/custom-hooks/useRoster.js";
import "src/utils/styles/page-styles/roster.scss";

const RosterPage = () => {
  const allRoster = useRoster();
  const [shownRoster, setShownRoster] = useState(allRoster);

  const handleToggleChange = e => {
    // update shownRoster based on value passed here
    const filteredValue = e.target.id.toUpperCase();

    if (filteredValue === "ALL") {
      setShownRoster(allRoster);
      return;
    }

    let filteredRoster = allRoster.filter(
      person =>
        (person.node.categories[0].name + "s").toUpperCase() === filteredValue
    );
    setShownRoster(filteredRoster);
  };

  return (
    <PageWrapper>
      <div className="roster-page">
        <ToggleButton handleChange={handleToggleChange} />

        <div className="roster-page__roster-container">
          {shownRoster.map(({ node }) => (
            <Card
              key={node.id}
              image={node.featured_media.localFile.childImageSharp.fluid}
              {...node}
            />
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default RosterPage;
