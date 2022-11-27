const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../**/*.stories.tsx'],
  addons: [],
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    storyStoreV7: true,
  },
  viteFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@src': path.resolve(__dirname, 'src'),
    };

    return config;
  },
};
