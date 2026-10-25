/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#F4FBFF',
        paper: '#040B11',
        panel: '#061018',
        surface: '#0C202A',
        cyan: '#35E7F5',
        emerald: '#37F5AE',
        muted: '#93B3C2',
        signal: '#338CFF',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
