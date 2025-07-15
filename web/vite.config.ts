import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'vite.svg'],
      manifest: {
        name: 'Meredith School App',
        short_name: 'Meredith',
        start_url: '/MeredithPhoneApp/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#1d4ed8',
        icons: [
          {
            src: '/MeredithPhoneApp/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/MeredithPhoneApp/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  base: '/MeredithPhoneApp/',
})
