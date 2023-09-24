/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  safelist: [
    'bg-indigo-200',
    'bg-indigo-500',
    'text-indigo-500',
    'bg-lime-100',
    'bg-lime-200',
    'bg-lime-500',
    'text-lime-500',
    'bg-cyan-100',
    'bg-cyan-200',
    'bg-cyan-500',
    'text-cyan-500',
    'bg-pink-100',
    'bg-pink-200',
    'bg-pink-500',
    'text-pink-500',
    'rotate',
  ],
  theme: {
    extend: {
      screens: {
        xs: '426px',
      },
    },
  },
  plugins: [],
};
