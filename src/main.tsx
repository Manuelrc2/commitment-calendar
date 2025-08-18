import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { darkTheme } from "./styles/theme.tsx";
import { AuthProvider } from "./providers/AuthProvider.tsx";
import Application from "./pages/Application.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={darkTheme}>
    <AuthProvider>
      <Application />
    </AuthProvider>
  </ThemeProvider>
);
