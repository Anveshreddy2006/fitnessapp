import React from "react";
import { Stack, Box } from "@mui/material";
import { InfinitySpin } from "react-loader-spinner";

const Loader = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="200px"
    >
      <Box>
        <InfinitySpin color="#FF2625" />
      </Box>
    </Stack>
  );
};

export default Loader;
