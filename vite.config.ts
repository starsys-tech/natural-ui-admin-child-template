import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
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
