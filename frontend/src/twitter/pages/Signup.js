/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line import/no-extraneous-dependencies
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// eslint-disable-next-line import/no-extraneous-dependencies
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// eslint-disable-next-line import/no-unresolved
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import signUpApi from "../../api/accountsApi";

const Copyright = (props) => (
  <Typography
    variant="body2"
    color="text.secondary"
    align="center"
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  >
    {"Copyright © "}
    <Link color="inherit" href="https://mui.com/">
      TwitterClone Team-B
    </Link>{" "}
    {new Date().getFullYear()}.
  </Typography>
);

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function signup() {
  const [newUsername, setNewUsername] = useState(""); // 初期値として空文字を入れる
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newRepassword, setNewRepassword] = useState("");
  const navigate = useNavigate();
  // const [newError, setNewError] = useState([]); // error

  const addUser = async (e) => {
    try {
      await signUpApi.createUser(
        newUsername,
        newEmail,
        newPassword,
        newRepassword
      );
      navigate("/home");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      // window.alert(error.response.data.email);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onBlur={(e) => setNewUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onBlur={(e) => setNewEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                id="password"
                label="password"
                type="password"
                autoComplete="current-password"
                autoFocus
                onBlur={(e) => setNewPassword(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="repassword"
                label="Repassword"
                type="password"
                id="repassword"
                autoComplete="current-password"
                onBlur={(e) => setNewRepassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={(e) => {
                  e.preventDefault();
                  addUser();
                }}
              >
                Sign Up
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default signup;
