/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Helvetica': ['Helvetica Neue', 'sans-serif'],
      },
      colors: {
        'neon': '#9EE428',
      },
      screens: {
        'sm': '840px',  // Small devices
        'md': '1005px',  // Medium devices
        'lg': '1184px', // Large devices
        'xl': '1280px', // Extra large devices
        '2xl': '1536px', // 2X Extra large devices
        'tablet': '600px', // Custom breakpoint for tablets
        'customBreakpoint': '240px',
      },
    },
  },
  plugins: [],
}
