import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:true
  },
  build: {
    outDir: "build",
    sourcemap: true,
  }
})
