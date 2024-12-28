const { createRequestHandler } = require('@remix-run/cloudflare');
const build = require('@remix-run/dev/server-build');

exports.handler = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext(event) {
    return {
      event,
    };
  },
});
