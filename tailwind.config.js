/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563eb', // DoubleCheck main blue
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        secondary: {
          DEFAULT: '#0f172a', // Dark slate for text
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        accent: {
          DEFAULT: '#94CE10', // DoubleCheck signature green
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#94CE10',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        },
        green: {
          DEFAULT: '#94CE10', // Main brand green
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#94CE10',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        },
        success: {
          DEFAULT: '#94CE10', // Use brand green for success
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16',
          600: '#94CE10',
          700: '#4d7c0f',
          800: '#365314',
          900: '#1a2e05',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'doublecheck-gradient': 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
        'gradient-aurora': 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 25%, #d946ef 50%, #ec4899 75%, #ef4444 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #f97316 0%, #f59e0b 50%, #eab308 100%)',
        'gradient-ocean': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
        'gradient-forest': 'linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #6d28d9 100%)',
      },
      animation: {
        'pulse-soft': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fadeIn': 'fadeIn 0.6s ease-out forwards',
        'slideInUp': 'slideInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft-custom': 'pulse-soft-custom 3s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scan': 'scan 2s linear infinite',
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'particle': 'particle 1.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px) scale(0.95)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0) scale(1)',
          },
        },
        'pulse-soft-custom': {
          '0%, 100%': { 
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: '0.7',
            transform: 'scale(1.02)',
          },
        },
        'bounce-gentle': {
          '0%, 100%': { 
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': { 
            transform: 'translateY(-10px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scan: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(200px)', opacity: '0' },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': { 
            transform: 'translateY(-10px) rotate(1deg)',
          },
        },
        'pulse-ring': {
          '0%': {
            transform: 'scale(0.33)',
            opacity: '1',
          },
          '80%, 100%': {
            transform: 'scale(2.4)',
            opacity: '0',
          },
        },
        particle: {
          '0%': {
            transform: 'translateY(0) scale(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateY(-100px) scale(1)',
            opacity: '0',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200% 0',
          },
          '100%': {
            backgroundPosition: '200% 0',
          },
        },
      },
      animationDelay: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
      }
    }
  },
  plugins: [],
  darkMode: "class"
};