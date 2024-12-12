import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app/scss': path.resolve(__dirname, 'src/assets/scss/index.scss'),
      '@app/icons': path.resolve(__dirname, 'src/assets/icons/index.ts'),
      '@app/layout': path.resolve(__dirname, 'src/layout/index.ts'),
      '@app/pages': path.resolve(__dirname, 'src/pages/index.ts'),
      '@app/components': path.resolve(__dirname, 'src/components/index.ts'),
      '@app/hooks': path.resolve(__dirname, 'src/hooks/index.ts'),
      '@app/helpers': path.resolve(__dirname, 'src/helpers/index.ts'),
      '@app/api': path.resolve(__dirname, 'src/api/index.ts'),
    },
  },
  server: {
    proxy: {
      '/v1': {
        // target: 'http://localhost:3001',
        target:
          'https://kvadred-dev-hhcpa2c7ccbshaam.polandcentral-01.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
    },
  },
});
