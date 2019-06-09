import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

import PageWrapper from "src/components/page-wrapper";
import "src/utils/styles/page-styles/about.scss";

const AboutPage = () => {
  const aboutData = useStaticQuery(graphql`
    query AboutPage {
      wordpressPage(title: { eq: "About" }) {
        id
        title
        content
      }
    }
  `).wordpressPage;

  return (
    <PageWrapper>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About Mayhem</title>
      </Helmet>

      <div className="about-page__title">About Mayhem Wrestling</div>

      <div
        className="about-page__content"
        dangerouslySetInnerHTML={{ __html: aboutData.content }}
      />
    </PageWrapper>
  );
};

export default AboutPage;
