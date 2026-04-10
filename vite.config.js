import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        crank_privacy: 'Crank_Privacy.html',
      },
    },
  },
})
