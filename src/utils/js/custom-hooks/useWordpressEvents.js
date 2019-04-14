import { useStaticQuery, graphql } from "gatsby";

export const useWordpressEvents = () => {
  const data = useStaticQuery(graphql`
    query WordpressEvents {
      allWordpressWpEvent {
        edges {
          node {
            id
            slug
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
      }
    }
  `);

  return data.allWordpressWpEvent.edges;
};
