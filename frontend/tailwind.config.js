/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
      colors: {
        primary: "#ff014f",
        secondary: "#f4f5f6",
        tertiary: "#0d1013",
        bodyWhite: "#3c3e41",
        subtitle: "#f9004d",
        heading: "#1e2125",
        senary: "#CDCDCD",
        tcolor: "#A6A6A6",
        page: "#222",
        menu: "rgba(0, 0, 0, 0.7)",
        menu2: "rgba(0, 0, 0, 0.8)",
        banner: "rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        btn: "linear-gradient(145deg, #e2e8ec, #ffffff)",
        btnHover: "linear-gradient(145deg, #ff014f, #d11414)",
        loader: "linear-gradient(90deg, #009fff, #ff014f)",
        
      },
      boxShadow: {
        "3xl": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
        menu: "0 0 10px 0 rgb(0 0 0 / 70%)",
        "4xl": "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff;",
      },
      content: {
        link: 'url("https://i.ibb.co/cQQt8b3/test.jpg")',
      },
    },
  },
  plugins: [],
};
