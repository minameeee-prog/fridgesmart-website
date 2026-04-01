import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef8ff',
          100: '#d9f0ff',
          200: '#bce5ff',
          300: '#8fd5ff',
          400: '#5abfff',
          500: '#2ea7ff',
          600: '#1788f5',
          700: '#126fd9',
          800: '#155caf',
          900: '#184d8a'
        }
      },
      boxShadow: {
        soft: '0 12px 40px rgba(15, 23, 42, 0.08)',
      }
    },
  },
  plugins: [],
};

export default config;
