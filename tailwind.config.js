/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.mdx',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [require('fumadocs-ui/tailwind-plugin')],
};
