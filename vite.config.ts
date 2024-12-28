import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as sass from 'sass-embedded';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer', 'process'],
      globals: {
        process: true,
      },
    }),
    remixVitePlugin({
      ssr: true,
      serverModuleFormat: 'cjs',
    }),
    UnoCSS({
      mode: 'global',
      include: [/\.tsx$/, /\.ts$/, /\.jsx$/, /\.js$/],
    }),
    tsconfigPaths(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]',
    },
    preprocessorOptions: {
      scss: {
        implementation: sass,
        additionalData: '@use "sass:math";',
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['path', 'virtual:uno.css?__remix_sideEffect__'],
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
      '/icons': resolve(__dirname, './public/icons'),
    },
  },
  optimizeDeps: {
    exclude: ['virtual:uno.css?__remix_sideEffect__'],
  },
});
