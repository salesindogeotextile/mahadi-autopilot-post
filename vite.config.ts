import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GOOGLE_SCRIPT_URL': JSON.stringify(env.GOOGLE_SCRIPT_URL || env.VITE_GOOGLE_SCRIPT_URL),
      'process.env.WP_URL': JSON.stringify(env.WP_URL || 'https://indogeotextile.com/'),
      'process.env.WP_USERNAME': JSON.stringify(env.WP_USERNAME || 'Mahadi'),
      'process.env.WP_APP_PASSWORD': JSON.stringify(env.WP_APP_PASSWORD || env.WP_PASSWORD || 'TnLC KJvn sZal 3aQs 9YT7 AkVO'),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
