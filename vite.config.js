import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative URLs keep assets working on both user sites and repository sites.
  base: './',
  plugins: [react()],
})
