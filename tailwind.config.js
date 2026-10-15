/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#06090F',
          900: '#090D16',
          850: '#0D1424',
          800: '#0F172A',
          750: '#17223B',
          700: '#1E293B',
          600: '#334155',
        },
        electric: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
        },
        cyanTech: {
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
        },
        safety: {
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1EBE5D',
          dark: '#128C7E',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 20px 30px -10px rgba(37, 99, 235, 0.15)',
        'electric-glow': '0 0 25px -5px rgba(37, 99, 235, 0.4)',
        'safety-glow': '0 0 25px -5px rgba(234, 88, 12, 0.4)',
        'whatsapp-glow': '0 0 25px -5px rgba(37, 211, 102, 0.4)',
        '2d-sticker': '0 8px 0px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
        'pulse-subtle': 'pulseSubtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'float-2d': 'float2D 3.5s ease-in-out infinite',
        'float-slow-2d': 'float2D 5s ease-in-out infinite',
        'wiggle-2d': 'wiggle2D 1.5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'flame-2d': 'flame2D 0.8s ease-in-out infinite alternate',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.02)' },
        },
        float2D: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle2D: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        flame2D: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '100%': { transform: 'scale(1.1)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
