import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState, type JSX } from "react";
import type { LoginRequest, RegisterRequest } from "../types/AuthTypes";
import { useAuth } from "../hooks/useAuth";

function Login(): JSX.Element {
  const [registerRequest, setRegisterRequest] = useState<RegisterRequest>({
    name: "",
    email: "",
    password: "",
  });
  const [loginRequest, setLoginRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [signUpClicked, setSignUpClicked] = useState<boolean>(false);
  const [loginOptionClicked, setLoginOptionClicked] = useState<boolean>(false);
  const [logInClicked, setLogInClicked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const { register, login, isLoading } = useAuth();
  const theme = useTheme();
  useEffect(() => {
    const signUp = async () => {
      if (signUpClicked) {
        try {
          await register(registerRequest);
        } catch (error) {
          setErrorMessage(
            error instanceof Error ? error.message : "An unknown error occurred"
          );
        }
      }
    };
    signUp();
    setSignUpClicked(false);
  }, [signUpClicked]);
  useEffect(() => {
    const logIn = async () => {
      if (logInClicked) {
        try {
          await login(loginRequest);
        } catch (error) {
          setErrorMessage(
            error instanceof Error ? error.message : "An unknown error occurred"
          );
        }
      }
    };
    logIn();
    setLogInClicked(false);
  }, [logInClicked]);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing="2vh"
      sx={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {isLoading ? (
        <CircularProgress />
      ) : !loginOptionClicked ? (
        <>
          <Typography fontSize="4vw" color={theme.palette.text.primary}>
            Sign up
          </Typography>
          <TextField
            label="Name"
            onChange={(event) =>
              setRegisterRequest((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
            sx={{ width: "15vw" }}
          />
          <TextField
            label="Email"
            onChange={(event) =>
              setRegisterRequest((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            sx={{ width: "15vw" }}
          />
          <TextField
            label="Password"
            onChange={(event) =>
              setRegisterRequest((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
            sx={{ width: "15vw" }}
          />
          <Button
            sx={{ backgroundColor: "rgba(106, 176, 255, 0.3)", width: "15vw" }}
            onClick={() => setSignUpClicked(true)}
          >
            Sign up
          </Button>
          <Typography
            fontSize="0.9vw"
            color={theme.palette.text.primary}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Already have an account?
            <Typography
              fontSize="0.9vw"
              component="span"
              color="rgba(51, 207, 255, 0.52)"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => setLoginOptionClicked(true)}
              ml="0.5vw"
            >
              Log in
            </Typography>
          </Typography>
        </>
      ) : (
        <>
          <Typography fontSize="4vw" color={theme.palette.text.primary}>
            Log In
          </Typography>
          <TextField
            label="Email"
            onChange={(event) =>
              setLoginRequest((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
            sx={{ width: "15vw" }}
          />
          <TextField
            label="Password"
            onChange={(event) =>
              setLoginRequest((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
            sx={{ width: "15vw" }}
          />
          <Button
            sx={{ backgroundColor: "rgba(106, 176, 255, 0.3)", width: "15vw" }}
            onClick={() => setLogInClicked(true)}
          >
            Log In
          </Button>
          <Typography
            fontSize="0.9vw"
            color={theme.palette.text.primary}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Don't you have an account yet?
            <Typography
              fontSize="0.9vw"
              component="span"
              color="rgba(51, 207, 255, 0.52)"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  textDecoration: "underline",
                },
              }}
              onClick={() => setLoginOptionClicked(false)}
              ml="0.5vw"
            >
              Register
            </Typography>
          </Typography>
        </>
      )}
      {errorMessage && (
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setErrorMessage(undefined);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="error"
        >
          {errorMessage}
        </Alert>
      )}
    </Grid>
  );
}

export default Login;
