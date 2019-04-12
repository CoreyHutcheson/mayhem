import React from "react";

import PageWrapper from "src/components/page-wrapper";
import { useWordpressPages } from "src/utils/js/custom-hooks/useWordpressPages";

const IndexPage = () => {
  const data = useWordpressPages();

  return (
    <PageWrapper>
      {/* Uses custom hook to loop through all WP pages displaying the title */}
      {data.map(({ node }) => (
        <div>{node.title}</div>
      ))}
    </PageWrapper>
  );
};

export default IndexPage;
