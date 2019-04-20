import { useStaticQuery, graphql } from "gatsby";
import moment from "moment";

export const useFeaturedEvents = () => {
  const data = useStaticQuery(graphql`
    query AllFeaturedEvents {
      allWordpressWpEvent(filter: { acf: { featured_event: { eq: true } } }) {
        edges {
          node {
            title
            slug
            fields {
              timestamp
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
