const path = require(`path`);
const slash = require(`slash`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const currentDate = new Date();

  const result = await graphql(
    `
      query AllWordpressEvents {
        allWordpressWpEvent {
          edges {
            node {
              id
              slug
              acf {
                event_date
              }
            }
          }
        }
      }
    `
  );

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const { allWordpressWpEvent } = result.data;

  // Filter out events that have already happened
  const upcomingEvents = allWordpressWpEvent.edges.filter(({ node }) => {
    const eventDate = new Date(node.acf.event_date);
    return currentDate < eventDate;
  });

  const pageTemplate = path.resolve(`./src/templates/event.jsx`);

  upcomingEvents.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    });
  });
};
