import React from "react";

import PageWrapper from "src/components/page-wrapper";
// import { useWordpressEvents } from "src/utils/js/custom-hooks/useWordpressEvents";

const EventTemplate = ({ pageContext }) => {
  console.log(pageContext);

  return <PageWrapper>Event</PageWrapper>;
};

export default EventTemplate;
