import React, { useContext, useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name.trim()) return;
    login(name);
    navigate("/");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <Paper sx={{ p: 4, width: 320 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <TextField
          fullWidth
          label="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 2 }}
          onClick={handleLogin}
        >
          Continue
        </Button>
      </Paper>
    </Box>
  );
};

export default Login;
