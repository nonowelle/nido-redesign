import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Markdown from 'vite-plugin-md';

export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),

    Markdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
  ],
  define: {
    global: 'globalThis',
  },

  optimizeDeps: {
    include: ['buffer'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      buffer: 'buffer',
    },
  },
  publicDir: 'public',
});
