/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      zIndex: {
        '-1': '-1',
      },
      dropShadow: {
        'custom': '0 0 0.75rem rgba(0, 0, 0, 0.5)',
      },
      boxShadow: {
        'custom': '0 0 0.5rem rgba(0, 0, 0, 0.5)',
      },
      
    },
  },
  plugins: [],
};
