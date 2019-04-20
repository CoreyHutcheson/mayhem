import { useStaticQuery, graphql } from "gatsby";

export const useFeaturedEvents = () => {
  const data = useStaticQuery(graphql`
    query AllFeaturedEvents {
      allWordpressWpEvent(filter: { acf: { featured_event: { eq: true } } }) {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  return data.allWordpressWpEvent.edges;
};
