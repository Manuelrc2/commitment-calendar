import { Grid } from "@mui/material";
import type { JSX } from "react";
import { useAuth } from "../hooks/useAuth";
import MainPage from "./MainPage";
import Login from "./Login";

function Application(): JSX.Element {
  const auth = useAuth();
  return auth.isAuthenticated ? <MainPage /> : <Login />;
}

export default Application;
