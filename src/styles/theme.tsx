import { createTheme, type Shadows, type Theme } from "@mui/material/styles";

const lightTheme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000",
    },
    secondary: {
      main: "rgba(0, 0, 0, 0.3)",
    },
    background: {
      default: "#fffced", // White
    },
    text: {
      primary: "#000", // Black
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  shadows: Array(25)
    .fill("")
    .map((_, index) => {
      if (index === 0) return "none";
      const opacity = Math.min(0.1 + (index / 25) * 0.2, 0.3);
      return `0px 0px 10px rgba(0, 0, 0, ${opacity})`;
    }) as Shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          padding: 0;
        }
      `,
    },
  },
});

const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "rgba(252, 252, 252, 0.3)",
    },
    background: {
      default: "#121212", // Dark Gray
    },
    text: {
      primary: "#fff", // White
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  shadows: Array(25)
    .fill("")
    .map((_, index) => {
      if (index === 0) return "none";
      const opacity = Math.min(0.1 + (index / 24) * 0.2, 0.3);
      return `0px 0px 10px rgba(252, 252, 252, ${opacity})`;
    }) as Shadows,
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          margin: 0;
          padding: 0;
        }
      `,
    },
  },
});

export { lightTheme, darkTheme };
