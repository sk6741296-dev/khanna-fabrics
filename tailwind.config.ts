import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#FAF8F5',
          alabaster: '#F3EFEA',
          white: '#FFFFFF',
          clay: '#B35446',
          clayHover: '#9C4337',
          blush: '#D48B80',
          gold: '#C59B27',
          goldLight: '#E5C065',
          indigo: '#1E2D3B',
          onyx: '#1C1917',
          charcoal: '#44403C',
          muted: '#78716C',
          border: '#E8E2D9',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'Cambria', 'serif'],
        sans: ['var(--font-jakarta)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
      boxShadow: {
        'luxury-sm': '0 2px 8px -2px rgba(28, 25, 23, 0.05), 0 1px 4px -1px rgba(28, 25, 23, 0.03)',
        'luxury-md': '0 6px 20px -4px rgba(28, 25, 23, 0.07), 0 2px 6px -1px rgba(28, 25, 23, 0.04)',
        'luxury-lg': '0 16px 36px -6px rgba(28, 25, 23, 0.10), 0 6px 14px -2px rgba(28, 25, 23, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;
