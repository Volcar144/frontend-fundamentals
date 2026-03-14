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
  // fumadocs-ui v15 dropped the tailwind-plugin export.
  // Theming is handled via CSS variables imported in globals.css.
};
