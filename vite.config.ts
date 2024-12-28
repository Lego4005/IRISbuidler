import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer'],
    }),
    remixVitePlugin(),
    UnoCSS(),
    tsconfigPaths(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
    },
  },
  build: {
    rollupOptions: {
      external: ['virtual:uno.css?__remix_sideEffect__'],
    },
  },
});
