module.exports = {
  core: {
    // Use Vite for the preview builder
    builder: 'storybook-builder-vite',
  },
  framework: '@storybook/vue3',
  stories: ['../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode',
  ],
  // Fix for Node >=17 OpenSSL 3 with Webpack (used by Storybook manager)
  // Force a supported hash function to avoid md4 usage
  managerWebpack: async (config) => {
    if (!config.output) config.output = {};
    config.output.hashFunction = 'xxhash64';
    return config;
  },
};
