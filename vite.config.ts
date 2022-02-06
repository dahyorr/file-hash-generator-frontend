import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api':{
        target: "http://backend:5000",   // TODO: change to environment variable
      },
      '/socket.io':{
        target: "http://backend:5000",   // TODO: change to environment variable
        ws: true
      }, 
    }
  },
  plugins: [
    react(), 
    tsconfigPaths(), 
    eslintPlugin(),
  ]
})
