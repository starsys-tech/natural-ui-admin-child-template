import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'lib',
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'na-child-core-demo',
      fileName: (format) => `index.${format}.js`,
    },
  },
});
