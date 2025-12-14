import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#ff8c42",
      },
      background: {
        default: mode === "dark" ? "#0f172a" : "#f8fafc",
        paper: mode === "dark" ? "#1e293b" : "#ffffff",
      },
    },
    shape: {
      borderRadius: 16,
    },
    typography: {
      fontFamily: "Inter, Roboto, sans-serif",
      button: {
        textTransform: "none",
        fontWeight: 600,
      },
    },
  });
