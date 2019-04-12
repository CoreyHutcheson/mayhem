module.exports = {
  siteMetadata: {
    title: `Gatsby Wordpress Netlify Starter`,
    description: `Get setup quickly running a wordpress back-end that get converted to a static site by gatsby and hosted on netlify with this starter theme.`,
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
        baseUrl: `demo.wp-api.org`,
        protocol: `https`,
        hostingWPCOM: false,
        // Set to false if not using Advanced Custom Fields wordpress plugin
        useACF: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-wordpress-netlify-starter`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
