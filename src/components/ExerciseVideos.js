import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
  const hasVideos = exerciseVideos.length > 0;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="33px">
        Watch{" "}
        <span
          style={{
            color: "#ff2625",
            textTransform: "capitalize",
          }}
        >
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      {!hasVideos && (
        <Typography color="#777" fontSize="18px" mt="10px">
          No videos available for this exercise.
        </Typography>
      )}

      {hasVideos && (
        <Stack
          justifyContent="flex-start"
          flexWrap="wrap"
          alignItems="flex-start"
          sx={{
            flexDirection: { lg: "row" },
            gap: { lg: "40px", xs: "20px" },
          }}
        >
          {exerciseVideos.slice(0, 3).map((item) => (
            <a
              key={item.id || item.url}
              className="exercise-video"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <Typography fontSize="16px" mt="8px" color="#333">
                {item.title}
              </Typography>
            </a>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ExerciseVideos;
