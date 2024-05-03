import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  worker: {
    plugins: () => [
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: (i) => `__tla_${i}`,
      }),
    ],
  },
  resolve: {
    alias: {
      src: '/src',
      contexts: '/src/shared/contexts',
      hooks: '/src/shared/hooks',
      services: '/src/shared/services',
      types: '/src/shared/types',
      utils: '/src/shared/utils',
      router: '/src/Router',
      pages: '/src/view/pages',
      layouts: '/src/view/layouts',
      components: '/src/view/components',
    },
  },
});
