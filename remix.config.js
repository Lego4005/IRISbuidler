/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildPath: '.netlify/functions-internal/server.js',
  serverMainFields: ['browser', 'module', 'main'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: false,
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
