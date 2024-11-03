import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { loginPageStyles } from "../assets/styles/loginPageStyles";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <Box sx={loginPageStyles.root}>
      <Typography variant="h1">JustBid</Typography>
      <TextField
        label="Username or Email"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button
        onClick={handleLogin}
        variant="contained"
        color="primary"
        fullWidth
      >
        Login
      </Button>
      <Box sx={loginPageStyles.linkWrapper}>
        <Link href="#" variant="body2">
          Forgot Password?
        </Link>
        <Link href="#" variant="body2">
          Register
        </Link>
      </Box>
    </Box>
  );
};

export default LoginPage;
