import React from "react";
import Img from "gatsby-image";

import PageWrapper from "src/components/page-wrapper";
import { useUpcomingEvents } from "src/utils/js/custom-hooks/useUpcomingEvents";

import "src/utils/styles/page-styles/events.scss";

const EventsPage = () => {
  const upcomingEvents = useUpcomingEvents();

  return (
    <PageWrapper>
      <div className="event-page__wrapper">
        {upcomingEvents.map(({ node }) => (
          <a
            href={`/events/${node.slug}`}
            className="event-page__event"
            key={node.id}
          >
            <div className="event-page__title">{node.title}</div>
            <Img
              className="event-page__image"
              key={node.id}
              fluid={node.acf.event_image.localFile.childImageSharp.fluid}
              alt={node.title}
            />
          </a>
        ))}
      </div>
    </PageWrapper>
  );
};

export default EventsPage;
