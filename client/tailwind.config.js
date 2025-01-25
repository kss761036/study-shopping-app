/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      pre: [
        "Pretendard Variable",
        "Pretendard",
        "-apple-system",
        "BlinkMacSystemFont",
        "system-ui",
        "Roboto",
        "Helvetica Neue",
        "Segoe UI",
        "Apple SD Gothic Neo",
        "Noto Sans KR",
        "Malgun Gothic",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "sans-serif",
      ],
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
