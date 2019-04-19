import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import moment from "moment";

import PageWrapper from "src/components/page-wrapper";
import EventContent from "src/components/event-content";
import "src/utils/styles/template-styles/eventTemplate.scss";

const EventTemplate = ({ data }) => {
  const {
    wordpressWpEvent: { title, acf },
  } = data;
  const timeUntil = moment(acf.event_date).fromNow();

  return (
    <PageWrapper>
      <article
        className={acf.use_card_details ? "event event--content" : "event"}
      >
        <header className="event__header">
          <h1 className="event__title">{title}</h1>
          <div className="event__countdown">{timeUntil}</div>
        </header>

        <div className="event__thumbnail">
          <Img fluid={acf.event_image.localFile.childImageSharp.fluid} />
        </div>

        <EventContent
          useCardDetails={acf.use_card_details}
          cardDetails={acf.card_details}
          extraCardDetails={acf.extra_card_details}
        />
      </article>
    </PageWrapper>
  );
};

export const query = graphql`
  query SingleWordpressEvent($id: String!) {
    wordpressWpEvent(id: { eq: $id }) {
      id
      title
      acf {
        event_date
        event_image {
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
        featured_event
        card_details {
          match_description
          match
        }
        use_card_details
        extra_card_details
      }
    }
  }
`;

export default EventTemplate;
