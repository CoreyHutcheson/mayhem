module.exports = {
  siteMetadata: {
    title: `Mayhem Wrestling`,
    description: `Website for Mayhem Wrestling.`,
    author: `Corey Hutcheson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-root-import`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // Remove protocol and trailing slash
        baseUrl: `mayhem.coreyhutcheson.com`,
        protocol: `https`,
        hostingWPCOM: false,
        // Set to false if not using Advanced Custom Fields wordpress plugin
        useACF: true,
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://mayhem.coreyhutcheson.com",
        //   replacementUrl: "https://mayhem.netlify.com",
        // },
        excludedRoutes: ["/siteground-optimizer/**", "/*/*/themes"],
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Mayhem Wrestling`,
    //     short_name: `Mayhem`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/assets/images/mayhem-logo.svg`, // This path is relative to the root of the site.
    //   },
    // },
  ],
};
