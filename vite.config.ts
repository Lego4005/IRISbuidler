import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as sass from 'sass-embedded';
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

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
    }),
    tsconfigPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        sassOptions: {
          includePaths: ['node_modules'],
        },
      },
    },
    modules: {
      localsConvention: 'camelCase',
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['path', 'virtual:uno.css?__remix_sideEffect__', 'virtual:uno.css'],
    },
    assetsInlineLimit: 0,
  },
  resolve: {
    alias: [
      { find: '~', replacement: resolve(__dirname, 'app') },
      { find: '/icons', replacement: resolve(__dirname, 'public/icons') },
    ],
  },
  publicDir: 'public',
  base: '/',
});
