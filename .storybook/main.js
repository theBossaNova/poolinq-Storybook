module.exports = {
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  viteFinal: async (config) => {
    const path = require("path");
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "../src"),
    };
    config.css = config.css || {};
    const existingScss =
      config.css.preprocessorOptions && config.css.preprocessorOptions.scss
        ? config.css.preprocessorOptions.scss
        : {};
    config.css.preprocessorOptions = {
      ...(config.css.preprocessorOptions || {}),
      scss: {
        ...existingScss,
        additionalData: `@use "@/styles/boot.scss" as *;`,
      },
    };
    return config;
  },
};
