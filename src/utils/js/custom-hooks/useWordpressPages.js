import { useStaticQuery, graphql } from "gatsby";

/**
 * Custom react hook to query for all Wordpress Pages, returning the title in
 * an array
 */
export const useWordpressPages = () => {
  const data = useStaticQuery(graphql`
    query WordpressPages {
      allWordpressPage {
        edges {
          node {
            title
          }
        }
      }
    }
  `);

  return data.allWordpressPage.edges;
};
