import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    sourcemap: false,
    cssMinify: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '1-dark': resolve(__dirname, 'demo/1/dark.html'),
        '1-light': resolve(__dirname, 'demo/1/light.html')
      }
    }
  },
})