const { createPreset } = require('fumadocs-ui/tailwind-plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.mdx',
    './node_modules/fumadocs-ui/dist/**/*.js',
    './node_modules/fumadocs-core/dist/**/*.js',
  ],
  theme: {
    extend: {},
  },
  presets: [createPreset()],
};
