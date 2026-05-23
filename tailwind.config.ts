import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0f1e',
        'dark-card': '#0d1525',
        'dark-term': '#0d1117',
        'dark-border': 'rgba(255,255,255,0.06)',
        'border-hover': 'rgba(79,172,254,0.35)',
        'accent': '#4facfe',
        'accent2': '#00f2fe',
        'purple': '#a78bfa',
        'text-main': '#e2e8f0',
        'text-muted': '#64748b',
        'text-dim': '#94a3b8',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 5px currentColor' },
          '50%': { opacity: '0.7', boxShadow: '0 0 20px currentColor' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config
