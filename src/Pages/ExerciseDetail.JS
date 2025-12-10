import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData, normalizeExercises } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";
import exerciseVideosMap from "../data/exerciseVideos";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        window.scrollTo({ top: 0, behavior: "smooth" });

        const raw = await fetchData(
          "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json"
        );
        const allExercises = normalizeExercises(raw);

        const current = allExercises.find((item) => item.id === id);

        if (!current) {
          console.error("Exercise not found for id:", id);
          return;
        }

        setExerciseDetail(current);

        const localVideos = exerciseVideosMap[current.name] || [];
        setExerciseVideos(localVideos);

        const sameTarget = allExercises.filter(
          (item) => item.id !== current.id && item.target === current.target
        );

        const sameEquipment = allExercises.filter(
          (item) =>
            item.id !== current.id && item.equipment === current.equipment
        );

        setTargetMuscleExercises(sameTarget);
        setEquipmentExercises(sameEquipment);

        // no YouTube API for now – keep videos empty
        setExerciseVideos([]);
      } catch (err) {
        console.error("Failed to load exercise detail:", err);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) {
    return (
      <Box p="20px">
        <Loader />
      </Box>
    );
  }

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />

      {exerciseVideos.length > 0 && (
        <ExerciseVideos
          exerciseVideos={exerciseVideos}
          name={exerciseDetail.name}
        />
      )}

      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
