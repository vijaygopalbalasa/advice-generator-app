import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        //Neutral
        "grayish-blue": "hsl(217, 19%, 38%)",
        "dark-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)"

      },
      boxShadow: {
        "custom-neo-glow": "0px 0px 61px 5px rgba(45,255,196,0.9)"
      },
      fontFamily: {
        manrope: ["var(--manrope)"]
      }
    },
  },
  plugins: [],
}
export default config
