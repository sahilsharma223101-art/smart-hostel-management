/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        royal: {
          50: '#ecf3ff',
          100: '#d8e6ff',
          200: '#b8d1ff',
          300: '#86b2ff',
          400: '#4e89ff',
          500: '#2869ef',
          600: '#1d52cf',
          700: '#1d468e',
          800: '#173763',
          900: '#122949',
          950: '#0d1d33',
        },
        coral: '#f06b4f',
        sand: '#f4efe3',
        shell: '#f8f5ee',
        pine: '#1f6b5c',
        gold: '#e8b34b',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(17, 24, 39, 0.08)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(29, 82, 207, 0.12), transparent 32%), radial-gradient(circle at top right, rgba(240, 107, 79, 0.13), transparent 34%), linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245, 248, 255, 0.96))',
        'hero-grid-dark':
          'radial-gradient(circle at top left, rgba(78, 137, 255, 0.16), transparent 32%), radial-gradient(circle at top right, rgba(232, 179, 75, 0.12), transparent 34%), linear-gradient(180deg, rgba(10, 16, 28, 0.98), rgba(17, 28, 45, 0.98))',
      },
      keyframes: {
        floatUp: {
          '0%': { opacity: 0, transform: 'translateY(18px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        floatUp: 'floatUp 0.45s ease-out forwards',
      },
    },
  },
  plugins: [],
};
