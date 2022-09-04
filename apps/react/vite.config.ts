import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const config = ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
      },
    },
    plugins: [react()],
    build: { outDir: 'build' },
    preview: {
      open: true,
    },
  });
};

export default config;
