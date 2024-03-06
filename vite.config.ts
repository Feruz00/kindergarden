import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import react from '@vitejs/plugin-react'
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.css'],
  },
  define: {
    'process.env': process.env
  }
})


