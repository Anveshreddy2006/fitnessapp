// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import Login from "./auth/Login";
import { AuthContext } from "./auth/AuthContext";
import { useContext } from "react";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = () => {
  const stored =
    typeof window !== "undefined" ? localStorage.getItem("mode") : null;
  const initialMode = stored === "dark" ? "dark" : "light";

  const [mode, setMode] = React.useState(initialMode);

  React.useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                // palette for light mode (you can extend)
                background: {
                  default: "#fffafb",
                  paper: "#ffffff",
                },
                primary: { main: "#FF2625" },
                text: { primary: "#3A1212", secondary: "#6b6b6b" },
              }
            : {
                // palette for dark mode
                background: {
                  default: "#0f1724", // dark page background
                  paper: "#0b1220", // card / panel background
                },
                primary: { main: "#FF8A65" },
                text: { primary: "#fff", secondary: "#cfcfcf" },
              }),
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                textTransform: "none",
                borderRadius: 8,
              },
            },
          },
        },
        typography: {
          fontFamily:
            "'Josefin Sans', system-ui, -apple-system, 'Segoe UI', sans-serif",
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ width: { xs: "100%", xl: "1488px" }, m: "auto" }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
