// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import process from 'process';

export default defineConfig({
  define: {
    'process.env': process.env, // Polyfill process.env
  },
});
