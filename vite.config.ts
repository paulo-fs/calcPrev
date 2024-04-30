import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      app: '/src/app',
      router: '/src/Router',
      pages: '/src/view/pages',
      layouts: '/src/view/layouts',
      components: '/src/view/components',
      utils: '/src/app/utils',
    },
  },
});
