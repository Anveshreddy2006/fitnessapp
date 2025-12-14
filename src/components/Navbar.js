import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack, IconButton, Tooltip, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import Logo from "../assets/images/Logo.png";
import { ColorModeContext } from "../App";

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  const handleHomeClick = (e) => {
    e.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      px="20px"
      sx={{
        gap: { sm: "40px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
      }}
    >
      {/* Logo */}
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

      {/* Links + Theme Toggle */}
      <Stack direction="row" gap="24px" alignItems="center" fontSize="24px">
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

        {/* 🌙 Dark / Light Toggle — NOW BESIDE EXERCISES */}
        <Tooltip title="Toggle light / dark theme">
          <IconButton
            onClick={colorMode.toggleColorMode}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "10px",
              ml: 1,
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
    </Stack>
  );
};

export default Navbar;
