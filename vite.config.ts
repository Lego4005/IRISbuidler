import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer', 'process'],
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
        includePaths: ['node_modules'],
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
      '/icons': resolve(__dirname, './public/icons'),
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['path', 'virtual:uno.css?__remix_sideEffect__', 'virtual:uno.css', 'istextorbinary'],
    },
    assetsInlineLimit: 0,
  },
  optimizeDeps: {
    exclude: ['virtual:uno.css?__remix_sideEffect__'],
  },
});
