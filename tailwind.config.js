/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: '320px' }, // Mobile devices (320px and below)
        md: { min: '321px', max: '768px' }, // iPads, Tablets (321px - 768px)
        lg: { min: '769px', max: '1024px' }, // Small screens, laptops (769px - 1024px)
        xl: { min: '1025px', max: '1200px' }, // Desktops, large screens (1025px - 1200px)
        '2xl': { min: '1201px' }, // Extra large screens, TV (1201px and above)
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
