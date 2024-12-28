const { createRequestHandler } = require('@remix-run/netlify');
const build = require('@remix-run/dev/server-build');

const handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext(event) {
    // Get the context from the event
    return {
      event,
    };
  },
});

module.exports = { handler };
