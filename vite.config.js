import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  preview: {
    port: 3001,
  },
  build: {
    incremental: true,

    babel: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
    },
    // Modo debug para ejecuciones de la generacion del build
    debug: true,
    cache: true,
    minify: true,
    mode: "production",
    chunks: true,
    moduleBuilding: true,
    devCode: true,
  },
})
