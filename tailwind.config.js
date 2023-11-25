/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.jsx'],
  prefix: 'tw-',
  theme: {
    extend: {}
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}