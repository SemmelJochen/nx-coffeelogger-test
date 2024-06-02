/// <reference types="vitest" />

import analog from '@analogjs/platform'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin'
import { resolve } from 'path'
import { defineConfig, splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {

  return {
    root: __dirname,
    cacheDir: `../../node_modules/.vite`,

    publicDir: resolve(__dirname, '../../apps/coffeelogger/public'),
    build: {
      outDir: '../../dist/./coffeelogger/client',
      reportCompressedSize: true,
      target: ['es2020'],

    },
    server: {
      fs: {
        allow: ['.'],
        cachedChecks: false
      },
    },
    plugins: [
      analog({ ssr: false }),
      nxViteTsPaths(),
      splitVendorChunkPlugin(),
    ],
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: ['src/test-setup.ts'],
      include: ['**/*.spec.ts'],
      reporters: ['default'],
    },
    define: {
      'import.meta.vitest': mode !== 'production',
    },
    resolve: {
      alias: {
        // 'apps/*': resolve(__dirname, '../../apps/*'),
        'libs/ui': resolve(__dirname, '../../libs/ui'),
        'apps/coffeelogger': resolve(__dirname, '../../apps/coffeelogger'),
        // { find: '@libs/*', replacement: fileURLToPath(new URL('../../libs/*', import.meta.url)) },
      },

    },

  }
})
