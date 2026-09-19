import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' ensures the built site works when hosted at
// https://<username>.github.io/<repo-name>/ (any repo name, no config needed)
export default defineConfig({
  plugins: [react()],
  base: './',
})
