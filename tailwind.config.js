/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'timeline-dark': '#121212',
        'timeline-darker': '#0a0a0a',
        'timeline-orange': '#FF6B00',
        'timeline-orange-light': '#FF8C3D',
        'timeline-orange-dark': '#E05A00',
        'timeline-gray': '#2A2A2A',
        'timeline-gray-light': '#3A3A3A',
      },
      fontFamily: {
        'tech': ['Orbitron', 'sans-serif'],
        'body': ['Rajdhani', 'sans-serif'],
      },
      boxShadow: {
        'timeline': '0 0 15px rgba(255, 107, 0, 0.3)',
        'timeline-hover': '0 0 20px rgba(255, 107, 0, 0.5)',
      },
    },
  },
  plugins: [],
};