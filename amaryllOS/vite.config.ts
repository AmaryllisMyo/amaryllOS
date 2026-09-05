import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import mdx from '@mdx-js/rollup'
import { defineConfig } from 'vite'
import svgr from "vite-plugin-svgr";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
    }
  },
  plugins: [
    { enforce: 'pre', ...mdx() },
    svgr(),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})
