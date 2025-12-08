import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(data);
    };

    fetchExerciseData();
  }, [id]);

  if (!exerciseDetail) return <div>Loading...</div>;

  // Use the same CloudFront GIF pattern

  const gifUrl = `https://d205bpvrqc9yn1.cloudfront.net/${id}.gif`;

  return (
    <Box sx={{ mt: { lg: "80px", xs: "20px" }, p: "20px" }}>
      <Stack direction={{ lg: "row", xs: "column" }} gap="40px">
        <img
          src={gifUrl}
          alt={exerciseDetail.name}
          loading="lazy"
          style={{
            borderRadius: "20px",
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            display: "block",
          }}
        />

        <Stack gap="20px">
          <Typography
            fontWeight={700}
            fontSize="40px"
            textTransform="capitalize"
          >
            {exerciseDetail.name}
          </Typography>

          <Typography fontSize="18px" color="#555">
            {exerciseDetail.description}
          </Typography>

          <Typography fontSize="22px" fontWeight="600">
            Target Muscle:{" "}
            <span style={{ color: "#ff2625" }}>{exerciseDetail.target}</span>
          </Typography>

          <Typography fontSize="22px" fontWeight="600">
            Body Part:{" "}
            <span style={{ color: "#ff2625" }}>{exerciseDetail.bodyPart}</span>
          </Typography>

          <Typography fontSize="22px" fontWeight="600">
            Equipment:{" "}
            <span style={{ color: "#ff2625" }}>{exerciseDetail.equipment}</span>
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default ExerciseDetail;
