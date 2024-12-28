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
  serverDependenciesToBundle: ['virtual:uno.css?__remix_sideEffect__', 'virtual:uno.css', /^@iconify-json\/.*/],
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
};
