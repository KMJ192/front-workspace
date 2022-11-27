import path from 'path';
import { defineConfig, LibraryOptions, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

const isLibBuild = process.env.BUILD === 'lib';

const outDir = isLibBuild ? 'build' : 'dist';
const lib: false | LibraryOptions = isLibBuild
  ? {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'Storybook',
      formats: ['es', 'umd'],
      fileName: (format) => `index.${format}.js`,
    }
  : false;

const plugins = isLibBuild ? [dts(), react()] : [react()];

const config = ({ mode }: any) => {
  process.env = {
    ...process.env,
    ...loadEnv(mode, process.cwd()),
  };

  return defineConfig({
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, './src'),
      },
    },
    plugins,
    build: {
      outDir,
      lib,
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          // preserveModules: true,
          // inlineDynamicImports: false,
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    preview: {
      open: true,
    },
  });
};

export default config;
