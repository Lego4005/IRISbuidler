/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  serverModuleFormat: 'cjs',
  serverPlatform: 'node',
  tailwind: false,
  postcss: true,
  watchPaths: ['./public'],
  serverDependenciesToBundle: ['virtual:uno.css?__remix_sideEffect__', 'virtual:uno.css', /^@iconify-json\/.*/],
  browserNodeBuiltinsPolyfill: {
    modules: {
      path: true,
      util: true,
      buffer: true,
      process: true,
    },
  },
  future: {
    v3_fetcherPersist: true,
    v3_lazyRouteDiscovery: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
  },
};
