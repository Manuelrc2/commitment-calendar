import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage.tsx";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./styles/theme.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <MainPage />
  </ThemeProvider>
);
