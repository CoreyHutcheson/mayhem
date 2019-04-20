import React from "react";
import PropTypes from "prop-types";

import NavBar from "src/components/nav-bar";
import Footer from "src/components/footer";
import EventBanner from "src/components/event-banner";

import { useFeaturedEvents } from "src/utils/js/custom-hooks/useFeaturedEvents";

const PageWrapper = ({ children }) => {
  const featuredEvents = useFeaturedEvents();
  const banners = featuredEvents.map(({ node }) => (
    <EventBanner
      title={node.title}
      slug={node.slug}
      key={node.fields.timestamp}
    />
  ));

  return (
    <>
      <header id="masthead" className="site-header">
        <NavBar />
      </header>
      {banners}
      <main>{children}</main>
      <Footer />
    </>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageWrapper;
