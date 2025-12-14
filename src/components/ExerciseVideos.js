import React from "react";
import { Box, Stack, Typography, useTheme, IconButton } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
  const theme = useTheme();
  const hasVideos = exerciseVideos.length > 0;

  return (
    <Box sx={{ marginTop: { lg: "200px", xs: "20px" } }} p="20px">
      <Typography variant="h3" mb="20px" color="text.primary">
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
        <Typography color="text.secondary" fontSize="18px" mt="10px">
          No videos available for this exercise.
        </Typography>
      )}

      {hasVideos && (
        <Stack
          direction="row"
          spacing={4}
          sx={{
            flexWrap: "wrap",
            alignItems: "flex-start",
          }}
        >
          {exerciseVideos.slice(0, 6).map((item) => (
            <Box
              key={item.id || item.url}
              sx={{
                width: { xs: "100%", sm: 320 },
                bgcolor: "background.paper",
                color: "text.primary",
                borderRadius: 2,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 4px 18px rgba(0,0,0,0.6)"
                    : "0 6px 20px rgba(20,20,20,0.06)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* clickable thumbnail */}
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Box
                  component="img"
                  src={
                    item.thumbnail ||
                    `https://img.youtube.com/vi/${
                      item.url.split("v=")[1] || ""
                    }/mqdefault.jpg`
                  }
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <Box
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    fontSize="15px"
                    fontWeight={600}
                    color="text.primary"
                    sx={{ pr: 1 }}
                  >
                    {item.title}
                  </Typography>
                  <IconButton
                    aria-label="open video"
                    size="small"
                    sx={{
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.06)",
                      "&:hover": { bgcolor: theme.palette.action.hover },
                    }}
                  >
                    <PlayArrowIcon />
                  </IconButton>
                </Box>
              </a>
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default ExerciseVideos;
