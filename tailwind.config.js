/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nikah: {
          50: '#fff1f4',
          100: '#ffe4ea',
          200: '#fecdd8',
          300: '#fea3b8',
          400: '#fb6f91',
          500: '#f23b6b',
          600: '#de1c52',
          700: '#9b1b47', // matching screenshot deep rose/crimson button
          800: '#83143b',
          900: '#700f31',
          950: '#430519',
          cream: '#fff9fa',
          surface: '#ffffff',
          darkCard: '#13282e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['"Noto Naskh Arabic"', 'Amiri', 'serif'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(155, 27, 71, 0.06)',
        'sheet': '0 -10px 40px rgba(42, 22, 32, 0.15)',
        'card': '0 4px 20px rgba(155, 27, 71, 0.05)',
      }
    },
  },
  plugins: [],
}
