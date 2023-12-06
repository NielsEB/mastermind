/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  mode: 'jit',
  safelist: [
    'text-2xl',
    'text-3xl',
    {
      pattern: /bg-(red|orange|blue|yellow|green|purple)-(50|100|200|300|400|500|600|700|800)/,
    },
  ],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('act', ['&.active', '&.router-link-active'])
    })
  ],
}

