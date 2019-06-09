import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import PageWrapper from "src/components/page-wrapper";

import "src/utils/styles/page-styles/index.scss";

const IndexPage = () => {
  const landingPageData = useStaticQuery(graphql`
    query LandingPage {
      wordpressPage(title: { eq: "Index" }) {
        featured_media {
          id
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
  `);

  return (
    <PageWrapper>
      <div className="index-page">
        <BackgroundImage
          Tag="div"
          className="index-page__image"
          fluid={
            landingPageData.wordpressPage.featured_media.localFile
              .childImageSharp.fluid
          }
        />

        <a href="/events/" className="index-page__button">
          Events
        </a>
      </div>
    </PageWrapper>
  );
};

export default IndexPage;
