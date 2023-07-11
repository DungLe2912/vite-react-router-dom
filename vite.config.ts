import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tsconfigPaths()],
    optimizeDeps: {
      // https://github.com/vitejs/vite/issues/8069
      include: ['react/jsx-runtime'],
    },
    server: { port: 3001 },
    base: env.VITE_BASE_PATH,
  }
})
