import { vitePlugin as remixVitePlugin } from '@remix-run/dev';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as sass from 'sass-embedded';

export default defineConfig({
  plugins: [
    nodePolyfills({
      include: ['path', 'buffer'],
      globals: {
        process: true,
      },
    }),
    remixVitePlugin({
      ssr: true,
    }),
    UnoCSS({
      mode: 'global',
    }),
    tsconfigPaths(),
  ],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  build: {
    rollupOptions: {
      external: ['path'],
    },
  },
  resolve: {
    alias: {
      '/icons': '/icons',
    },
  },
});
