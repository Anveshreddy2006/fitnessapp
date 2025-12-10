import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      mt="80px"
      bgcolor="#fff"
      py="20px"
      textAlign="center"
      borderTop="1px solid #eee"
    >
      <Typography
        variant="h6"
        color="#3A1212"
        fontWeight="bold"
        fontSize="18px"
      >
        Fitness App
      </Typography>

      <Typography color="#6b6b6b" fontSize="14px" mt="8px">
        Made with ❤️ for your workouts
      </Typography>
    </Box>
  );
};

export default Footer;
