import { readBuilderProgram, transform } from "typescript";

const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    colors: {
      black: "#010202",
      white: "#fff",
      transparent: "#00000000",
      codgray: "#1E1E1E",
      curiousblue: "#1E88E5",
      bluecharcoal: "#020820",
      haiti: "#0A1128",
      bluezodiac: "#0D233F",
      slategray: "#64748B",
      gray: "#6F7784",
      green: "#7EE787",
      salmon: "#FF886A",
      success: "#7EE787",
      warn: "#D88100",
      error: "#FF3636",
      clay: "#23283D",
      darkblue: "#0B6F8F",
      prime: "#5AC4FF",
      bblack: "#000000",
      wwhite: "#FFFFFF"
    },
    extend: {
      animation: {
        growsize: "growsize 0.3s ease-in-out forwards 0.1s",
        reveal: "reveal 0.3s ease-in-out forwards 0.1s",
        "move-bl-to-star":
          "moveBottomLeftToStarPosition 0.7s ease-in-out forwards",
        "move-star-to-bl":
          "moveStarPositionToBottomLeft 0.7s ease-in-out forwards",
        "move-br-to-star":
          "moveBottomRightToStarPosition 0.7s ease-in-out forwards",
        "move-star-to-br":
          "moveStarPositionToBottomRight 0.7s ease-in-out forwards",
        spring: "spring 3s ease-in-out 200ms forwards"
      },
      keyframes: {
        spring: {
          "0%": {
            transform: "translate(-75%, -10%) scale(10) rotate(0deg)",
            opacity: 1
          },
          "20%": {
            transform: "translate(-75%, -10%) scale(1) rotate(180deg)",
            opacity: 1
          },
          "50%": {
            transform: "translate(65%, -10%) scale(1) rotate(360deg)",
            opacity: 1
          },
          "70%": {
            transform: "translate(0%, 80%) scale(0.06) rotate(45deg)",
            opacity: 1
          },
          "90%": {
            transform: "translate(0%, -40%) scale(0.06) rotate(45deg)",
            opacity: 1
          },
          "100%": {
            transform: "translate(0%, -40%) scale(0.06) rotate(135deg)",
            opacity: 1
          }
        },
        growsize: {
          "0%": { fontSize: "32px", fontWeight: "400" },
          "100%": { fontSize: "48px", fontWeight: "500" }
        },
        reveal: {
          "0%": { transform: "translate(0,100%)", opacity: 0 },
          "100%": { transform: "translate(0,0)", opacity: 1 }
        },
        moveBottomLeftToStarPosition: {
          "0%": {
            transform: "translate(0, 500%)",
            left: "-10%"
          },
          "100%": {
            top: "38%",
            left: "10%"
          }
        },
        moveStarPositionToBottomLeft: {
          "0%": {
            top: "38%",
            left: "10%"
          },
          "100%": {
            transform: "translate(0, 500%)",
            left: "-10%"
          }
        },
        moveBottomRightToStarPosition: {
          "0%": {
            transform: "translate(500%, 500%)"
          },
          "100%": {
            transform: "translate(-550%, -70%)"
          }
        },
        moveStarPositionToBottomRight: {
          "0%": {
            transform: "translate(-550%, -70%)"
          },
          "100%": {
            transform: "translate(500%, 500%)"
          }
        }
      },
      colors: {
        customGray: "#353535",
        customWhiteGray: "#D6D7D7",
        contactTitle: "#696A6E",
        contactBgLight: "rgba(1, 2, 2, 0.04)",
        contactBgDark: "rgba(255, 255, 255, 0.04)",
        radiusButtonBorderColorWhite: "rgba(255, 255, 255, 0.16)",
        radiusButtonBorderColorBlack: "rgba(1, 2, 2, 0.16)",
        imageBorderColor: "#333"
      },
      backgroundColor: {
        "custom-black": "#111212",
        "custom-gray": "#202020",
        "custom-white-gray": "rgba(243, 243, 243, 0.70)"
      },
      backgroundImage: {
        "hero-dark":
          "linear-gradient(180deg, rgba(1, 2, 2, 0.8) 0%, rgba(1, 2, 2, 0.4) 32.33%)",
        "banner-background":
          "linear-gradient(0deg, rgba(1, 2, 2, 0.50) 0%, rgba(1, 2, 2, 0.50) 100%)"
      },
      spacing: {
        70: "16.5rem"
      },
      height: {
        190: "45rem",
        140: "35rem",
        120: "30rem",
        110: "25rem",
        100: "20rem"
      }
    }
  },
  plugins: [require("tailwind-animatecss")]
};
export default config;
