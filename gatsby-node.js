const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const { allWordpressWpEvent } = result.data;

  const pageTemplate = path.resolve(`./src/templates/event.jsx`);

  allWordpressWpEvent.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
        title: edge.node.title.rendered,
        event_name: edge.node.acf.event_name,
        event_date: edge.node.acf.event_date,
        featured_event: edge.node.acf.featured_event,
        use_card_details: edge.node.acf.use_card_details,
        use_custom_images: edge.node.acf.use_custom_images,
        card_details: edge.node.acf.card_details,
        extra_card_details: edge.node.acf.extra_card_details,
      },
    });
  });
};
