import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // extend: {
    //   backgroundImage: {
    //     'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    //     'gradient-conic':
    //       'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    //   },
    // },

    extend: {
      // transitionDuration: {
      //   2000: "10000ms",
      // },
      animation: {
        rotate: "card_background_animation 10s infinite linear",
      },
      keyframes: {
        card_background_animation: {
          "0%": {
            transform: "rotate(3deg)",
          },
          "25%": {
            transform: "rotate(4deg)",
          },
          "50%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(2deg)",
          },
          "100%": {
            transform: "rotate(3deg)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient":
          "linear-gradient(90deg, #35b8e3, #f45925, #35b8e3) 0 0 / 300% 100%",
      },

      colors: {
        "card-gradient":
          "linear-gradient(184.12deg, #20b5e7 6.72%, #ff6b00 93.28%)",
        white: {
          DEFAULT: "#f4f3ee",
        },
        black: {
          DEFAULT: "#272733",
        },
        orange: {
          DEFAULT: "#ff6b00",
        },
        blue: {
          DEFAULT: "#20b5e7",
          500: "#23bef1",
        },
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
export default config;
