import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import exerciseVideosMap from "../data/exerciseVideos";

const ExerciseCard = ({ exercise }) => {
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

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />

      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#715757ff",
            background: "#FFA9A9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>

        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>

      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        textTransform="capitalize"
        fontSize="22px"
        mt="11px"
      >
        {exercise.name}
      </Typography>

      <Button
        sx={{
          ml: "21px",
          mt: "4px",
          mb: "10px",
          textTransform: "none",
          fontSize: "14px",
        }}
        onClick={handleWatchClick}
      >
        Watch on YouTube
      </Button>
    </Link>
  );
};

export default ExerciseCard;
