import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, IconButton, Tooltip, Button, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Logo from "../assets/images/Logo.png";
import { ColorModeContext } from "../App";
import { AuthContext } from "../auth/AuthContext";
import StreakBadge from "./StreakBadge";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      alignItems={{ xs: "flex-start", sm: "center" }}
      px="20px"
      sx={{
        gap: { xs: "12px", sm: "40px" },
        mt: { sm: "32px", xs: "16px" },
      }}
    >
      {/* LOGO */}
      <Link to="/" onClick={handleHomeClick}>
        <img
          src={Logo}
          alt="logo"
          style={{
            width: "48px",
            height: "48px",
            marginRight: "20px",
            cursor: "pointer",
          }}
        />
      </Link>

      {/* NAV LINKS */}
      <Stack direction="row" gap="24px" alignItems="center" fontSize="22px">
        <Link
          to="/"
          onClick={handleHomeClick}
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
            borderBottom: "3px solid",
            borderColor: theme.palette.primary.main,
          }}
        >
          Home
        </Link>

        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: theme.palette.text.primary,
          }}
        >
          Exercises
        </a>

        {/* 🌙 THEME TOGGLE (BESIDE EXERCISES) */}
        <Tooltip title="Toggle light / dark theme">
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "10px",
            }}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Tooltip>
      </Stack>

      {/* RIGHT SIDE (STREAK + LOGIN) */}
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        sx={{ marginLeft: "auto" }}
      >
        {user && <StreakBadge />}

        {!user ? (
          <Button variant="outlined" onClick={() => navigate("/login")}>
            Login
          </Button>
        ) : (
          <Button variant="outlined" onClick={logout}>
            Logout
          </Button>
        )}
      </Stack>
    </Stack>
  );
};

export default Navbar;
