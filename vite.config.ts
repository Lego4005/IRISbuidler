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
    }),
    remixVitePlugin(),
    UnoCSS(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './app'),
      '/icons': resolve(__dirname, './public/icons'),
    },
  },
  build: {
    rollupOptions: {
      external: ['path', 'virtual:uno.css?__remix_sideEffect__', 'virtual:uno.css', 'istextorbinary'],
    },
  },
});
