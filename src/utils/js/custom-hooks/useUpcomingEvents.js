import { useStaticQuery, graphql } from "gatsby";
import moment from "moment";

export const useUpcomingEvents = () => {
  const data = useStaticQuery(graphql`
    query AllUpcomingEvents {
      allWordpressWpEvent {
        edges {
          node {
            id
            title
            slug
            fields {
              timestamp
            }
            acf {
              event_date
              featured_event
              event_image {
                localFile {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const currentTimestamp = moment().unix();

  // Filter out past events and sort
  const upcomingEvents = data.allWordpressWpEvent.edges
    .filter(({ node }) => currentTimestamp < node.fields.timestamp)
    .sort(
      (event1, event2) =>
        event1.node.fields.timestamp - event2.node.fields.timestamp
    );

  return upcomingEvents;
};
