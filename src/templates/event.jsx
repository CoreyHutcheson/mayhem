import React from "react";
import { graphql } from "gatsby";

import PageWrapper from "src/components/page-wrapper";
// import { useWordpressEvents } from "src/utils/js/custom-hooks/useWordpressEvents";

const EventTemplate = ({ data }) => {
  const {
    wordpressWpEvent: { title, acf },
  } = data;

  console.log(acf.event_name);

  return (
    <PageWrapper>
      <div>{title}</div>
      <div>{`Event_Date: ${acf.event_date}`}</div>
    </PageWrapper>
  );
};

export const query = graphql`
  query SingleWordpressEvent($id: String!) {
    wordpressWpEvent(id: { eq: $id }) {
      id
      title
      acf {
        event_name
        event_date
        featured_event
        use_card_details
        use_custom_images
        card_details
        extra_card_details
      }
    }
  }
`;

export default EventTemplate;
