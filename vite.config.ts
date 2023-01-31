import type { ServerOptions } from 'vite'
import { resolve } from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const headers: { cookie?: string } = {}
  const env = loadEnv(mode, __dirname)
  const proxy: ServerOptions['proxy'] = {}

  if (env.VITE_COOKIE) {
    headers.cookie = env.VITE_COOKIE
  }

  if (env.VITE_TARGET) {
    proxy['/api'] = {
      target: env.VITE_TARGET,
      changeOrigin: true,
      secure: true,
      headers,
      rewrite: path => path.replace(/^\/api/, ''),
    }
  }

  return {
    base: env.VITE_BASE_URL,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@configurations': resolve(__dirname, 'src/configurations'),
        '@uses': resolve(__dirname, 'src/uses'),
        '@components': resolve(__dirname, 'src/components'),
        '@utils': resolve(__dirname, 'src/utils'),
      }
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        }
      },
    },
    server: {
      proxy,
    },
  }
})
