/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  server: './server.js',
  serverBuildPath: 'netlify/functions/server/index.js',
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  serverMinify: false,
  appDirectory: 'app',
  assetsBuildDirectory: 'build/client',
  publicPath: '/build/',
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
