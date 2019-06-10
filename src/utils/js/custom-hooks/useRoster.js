import { useStaticQuery, graphql } from "gatsby";

export const useRoster = () => {
  const data = useStaticQuery(graphql`
    query AllRoster {
      allWordpressWpRoster {
        edges {
          node {
            id
            categories {
              name
            }
            featured_media {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            title
            acf {
              nickname
              location
              quick_fact
              description
              website
              champion
              gallery {
                id
                localFile {
                  id
                  childImageSharp {
                    id
                    fluid {
                      base64
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

  return data.allWordpressWpRoster.edges;
};
