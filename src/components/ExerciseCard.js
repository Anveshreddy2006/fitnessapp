import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Stack, Typography, useTheme } from "@mui/material";
import exerciseVideosMap from "../data/exerciseVideos";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const ExerciseCard = ({ exercise }) => {
  const theme = useTheme();

  const videos = exerciseVideosMap[exercise.name] || [];
  const mappedUrl = videos[0]?.url;

  const fallbackUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    exercise.name + " exercise"
  )}&sp=EgIoAQ%253D%253D`;

  const firstVideoUrl = mappedUrl || fallbackUrl;

  const handleWatchClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(firstVideoUrl, "_blank");
  };

  // theme-aware shadows
  const cardShadow =
    theme.palette.mode === "dark"
      ? "0 6px 18px rgba(0,0,0,0.6)"
      : "0 6px 20px rgba(20,20,20,0.06)";

  const cardHoverShadow =
    theme.palette.mode === "dark"
      ? "0 12px 36px rgba(0,0,0,0.75)"
      : "0 14px 40px rgba(20,20,20,0.12)";

  return (
    <Link
      to={`/exercise/${exercise.id}`}
      style={{ textDecoration: "none", display: "block" }}
      aria-label={`Open details for ${exercise.name}`}
    >
      <Box
        className="exercise-card"
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          borderRadius: 2,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",

          /* combined transition for transform + box-shadow */
          transition:
            "transform 0.28s ease-in-out, box-shadow 0.28s ease-in-out",

          /* default shadow */
          boxShadow: cardShadow,

          "&:hover": {
            transform: "translateY(-6px) scale(1.01)",
            boxShadow: cardHoverShadow,
          },

          /* keep focus visible for keyboard users */
          "&:focus-within": {
            transform: "translateY(-4px) scale(1.008)",
            boxShadow: cardHoverShadow,
          },
        }}
      >
        <Box
          component="img"
          src={exercise.gifUrl}
          alt={exercise.name}
          loading="lazy"
          sx={{
            width: "100%",
            height: { xs: 220, sm: 260, md: 326 },
            objectFit: "cover",
            display: "block",
            backgroundColor: theme.palette.action.hover, // placeholder color while image loads
          }}
        />

        <Box sx={{ p: 2 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button
              size="small"
              sx={{
                px: 2,
                color: theme.palette.mode === "dark" ? "#3a1c1c" : "#715757",
                bgcolor:
                  theme.palette.mode === "dark"
                    ? "rgba(255,207,207,0.12)"
                    : "#FFA9A9",
                fontSize: "13px",
                borderRadius: "20px",
                textTransform: "capitalize",
                "&:hover": {
                  opacity: 0.94,
                },
              }}
            >
              {exercise.bodyPart}
            </Button>

            <Button
              size="small"
              sx={{
                px: 2,
                color: theme.palette.getContrastText("#FCC757"),
                bgcolor: "#FCC757",
                fontSize: "13px",
                borderRadius: "20px",
                textTransform: "capitalize",
                "&:hover": {
                  opacity: 0.95,
                },
              }}
            >
              {exercise.target}
            </Button>
          </Stack>

          <Typography
            color="text.primary"
            fontWeight="bold"
            textTransform="capitalize"
            fontSize={{ xs: "18px", md: "20px" }}
            sx={{ mb: 1 }}
          >
            {exercise.name}
          </Typography>

          <Button
            variant="outlined"
            size="small"
            startIcon={<PlayArrowIcon />}
            onClick={handleWatchClick}
            sx={{
              textTransform: "none",
              fontSize: "14px",
              borderRadius: 1,
              color: "text.primary",
              borderColor: theme.palette.divider,
              "&:focus": {
                outline: `2px solid ${theme.palette.primary.main}`,
                outlineOffset: 2,
              },
            }}
          >
            Watch on YouTube
          </Button>
        </Box>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
