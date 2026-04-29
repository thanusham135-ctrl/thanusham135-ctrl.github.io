import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body: ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        ink: '#181820',
        muted: '#6b6b80',
        accent: '#4f46e5',
        'accent-2': '#7c3aed',
        'accent-soft': '#ede9fe',
        surface: '#ffffff',
        bg: '#f5f4f0',
        teal: '#0d9488',
        'teal-soft': '#ccfbf1',
        amber: '#d97706',
        'amber-soft': '#fef3c7',
        rose: '#db2777',
        'rose-soft': '#fce7f3',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        float: 'float 9s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-18px) scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
