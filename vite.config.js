import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/React-CI-CD/",
  server: {
    port: 3006,
    host: true,
  },
  plugins: [react()],
})
