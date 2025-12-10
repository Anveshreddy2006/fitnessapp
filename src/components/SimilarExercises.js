import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({
  targetMuscleExercises = [],
  equipmentExercises = [],
}) => {
  const hasTarget = targetMuscleExercises.length > 0;
  const hasEquipment = equipmentExercises.length > 0;

  return (
    <Box sx={{ mt: { lg: "100px", xs: "40px" } }}>
      <Typography variant="h3" mb="20px">
        Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {hasTarget ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>

      {/* ---------------- SAME EQUIPMENT ---------------- */}
      <Typography variant="h3" mt="60px" mb="20px">
        Exercises that use the same equipment
      </Typography>

      <Stack direction="row" sx={{ p: 2, position: "relative" }}>
        {hasEquipment ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
