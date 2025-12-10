import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";

import Logo from "../assets/images/Logo.png";

const Navbar = () => {
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
      <Link to="/" onClick={handleHomeClick}>
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px 0 0" }}
        />
      </Link>

      <Stack direction="row" gap="40px" fontFamily="Alegreya" fontSize="24px">
        <Link
          to="/"
          onClick={handleHomeClick}
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>

        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
