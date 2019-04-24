const path = require(`path`);
const slash = require(`slash`);
const moment = require("moment");

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  // Creats timestamp field for wp_events
  if (node.internal.type === `wordpress__wp_event`) {
    const eventDate = new Date(node.acf.event_date);

    createNodeField({
      name: "timestamp",
      node,
      value: +moment(eventDate).format("X"),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const currentTimestamp = moment().unix();

  // All upcoming events
  // Events before current date/time are filtered out
  // Sorted in ascending order with soonest event first
  const result = await graphql(
    `
      query AllUpcomingEvents($date: Int) {
        allWordpressWpEvent(
          filter: { fields: { timestamp: { gt: $date } } }
          sort: { fields: [fields___timestamp], order: ASC }
        ) {
          edges {
            previous {
              slug
            }
            node {
              id
              slug
            }
            next {
              slug
            }
          }
        }
      }
    `,
    {
      date: currentTimestamp,
    }
  );

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors);
  }

  // Access query results via object destructuring
  const { allWordpressWpEvent: upcomingEvents } = result.data;

  const pageTemplate = path.resolve(`./src/templates/EventTemplate.jsx`);

  upcomingEvents.edges.forEach(edge => {
    const prevEvent = edge.previous ? edge.previous.slug : null;
    const nextEvent = edge.next ? edge.next.slug : null;

    createPage({
      path: `/events/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
        prevEvent,
        nextEvent,
      },
    });
  });
};
