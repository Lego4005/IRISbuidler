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
    }),
    remixVitePlugin(),
    UnoCSS(),
    tsconfigPaths(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
