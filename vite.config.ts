import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer', 'process', 'util'],
      globals: {
        process: true,
      },
      protocolImports: true,
    }),
    remixVitePlugin({
      ssr: true,
      serverModuleFormat: 'cjs',
    }),
    UnoCSS({
      mode: 'global',
    }),
    tsconfigPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "sass:math";',
        javascriptEnabled: true,
      },
    },
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
      '/icons': resolve(__dirname, './public/icons'),
    },
    dedupe: ['react', 'react-dom'],
    preserveSymlinks: true,
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['path', 'virtual:uno.css?__remix_sideEffect__', 'virtual:uno.css', 'istextorbinary'],
      output: {
        manualChunks: undefined,
      },
    },
    sourcemap: true,
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    exclude: ['virtual:uno.css?__remix_sideEffect__'],
    include: ['react', 'react-dom'],
  },
  ssr: {
    noExternal: true,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
