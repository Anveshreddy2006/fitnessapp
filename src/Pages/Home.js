import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  Stack,
  Snackbar,
  Alert,
  TextField,
} from "@mui/material";

import { generateDietPlan } from "../api/generateDietClient";
import { generateWorkoutPlan } from "../api/generateWorkoutClient";

import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const pillButton = (active) => ({
  borderRadius: "999px",
  px: 3,
  fontWeight: 600,
  borderColor: "primary.main",
  color: active ? "#fff" : "primary.main",
  bgcolor: active ? "primary.main" : "transparent",
  "&:hover": {
    bgcolor: "primary.main",
    color: "#fff",
  },
});

const sectionTitle = {
  mb: 1,
  fontWeight: 600,
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  color: "text.secondary",
};

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  const [level, setLevel] = useState("Beginner");
  const [split, setSplit] = useState("Push Pull Legs");
  const [location, setLocation] = useState("Gym");

  const [dietPlan, setDietPlan] = useState("");
  const [workoutPlan, setWorkoutPlan] = useState("");

  const [loading, setLoading] = useState(false);
  const [workoutLoading, setWorkoutLoading] = useState(false);

  const [weight, setWeight] = useState("");
  const [calories, setCalories] = useState(null);
  const [protein, setProtein] = useState(null);

  const [snack, setSnack] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Calculator
  const handleCalculate = () => {
    if (!weight) return;
    setProtein(Math.round(weight * 2));
    setCalories(Math.round(weight * 35));
  };

  // Diet
  const handleGenerateDiet = async () => {
    setLoading(true);
    try {
      const prompt = `
Create a 7-day Indian bodybuilding diet plan.
Level: ${level}
Calories: ${calories || "2800–3200"} kcal
Protein: ${protein || "High protein"}
Include meals, calories, protein, hydration & workout nutrition.
`;
      const data = await generateDietPlan(prompt);
      setDietPlan(data?.dietPlan || "No plan returned");
      setSnack({
        open: true,
        message: "Diet plan generated",
        severity: "success",
      });
    } catch {
      setSnack({
        open: true,
        message: "Diet generation failed",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Workout
  const handleGenerateWorkout = async () => {
    setWorkoutLoading(true);
    try {
      const prompt = `
Create a ${level}-level ${location} bodybuilding workout.
Split: ${split}
Include exercises, sets, reps, rest & recovery day.
`;
      const data = await generateWorkoutPlan(prompt);
      setWorkoutPlan(data?.workoutPlan || "No workout plan returned");
      setSnack({
        open: true,
        message: "Workout plan generated",
        severity: "success",
      });
    } catch {
      setSnack({
        open: true,
        message: "Workout generation failed",
        severity: "error",
      });
    } finally {
      setWorkoutLoading(false);
    }
  };

  return (
    <Box>
      <HeroBanner />

      {/* CONTROL CARD */}
      <Paper
        elevation={6}
        sx={{
          mt: 4,
          mx: "auto",
          p: { xs: 2, sm: 4 },
          maxWidth: "900px",
          borderRadius: 4,
          bgcolor: "background.paper",
          color: "text.primary",
        }}
      >
        {/* LEVEL */}
        <Box textAlign="center">
          <Typography sx={sectionTitle}>Training Level</Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            {["Beginner", "Intermediate", "Advanced"].map((v) => (
              <Button
                key={v}
                sx={pillButton(level === v)}
                onClick={() => setLevel(v)}
              >
                {v}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* SPLIT */}
        <Box textAlign="center" mt={4}>
          <Typography sx={sectionTitle}>Workout Split</Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            {["Push Pull Legs", "Bro Split"].map((v) => (
              <Button
                key={v}
                sx={pillButton(split === v)}
                onClick={() => setSplit(v)}
              >
                {v}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* LOCATION */}
        <Box textAlign="center" mt={4}>
          <Typography sx={sectionTitle}>Workout Location</Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            {["Gym", "Home"].map((v) => (
              <Button
                key={v}
                sx={pillButton(location === v)}
                onClick={() => setLocation(v)}
              >
                {v}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* CALCULATOR */}
        <Box textAlign="center" mt={4}>
          <Typography sx={sectionTitle}>
            Calories & Protein Calculator
          </Typography>
          <TextField
            type="number"
            label="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            sx={{ mt: 2, width: { xs: "100%", sm: "260px" } }}
          />
          <Box mt={2}>
            <Button variant="contained" onClick={handleCalculate}>
              Calculate
            </Button>
          </Box>

          {calories && (
            <Typography mt={2}>
              🔥 Calories: {calories} kcal/day <br />
              💪 Protein: {protein} g/day
            </Typography>
          )}
        </Box>

        {/* ACTION BUTTONS */}
        <Box textAlign="center" mt={5}>
          <Button
            variant="contained"
            color="success"
            disabled={loading}
            onClick={handleGenerateDiet}
            sx={{ px: 4, py: 1.4, borderRadius: 3, mb: 2 }}
          >
            {loading ? "Generating..." : "Generate Weekly Diet Plan"}
          </Button>

          <br />

          <Button
            variant="contained"
            disabled={workoutLoading}
            onClick={handleGenerateWorkout}
            sx={{ px: 4, py: 1.4, borderRadius: 3 }}
          >
            {workoutLoading ? "Generating..." : "Generate Weekly Workout Plan"}
          </Button>
        </Box>
      </Paper>

      {/* OUTPUT */}
      {[
        { title: "Weekly Diet Plan", value: dietPlan, set: setDietPlan },
        {
          title: "Weekly Workout Plan",
          value: workoutPlan,
          set: setWorkoutPlan,
        },
      ].map(
        (o) =>
          o.value && (
            <Paper
              key={o.title}
              sx={{
                mt: 4,
                p: 3,
                mx: "auto",
                maxWidth: "900px",
                borderRadius: 4,
                bgcolor: "background.paper",
                color: "text.primary",
                whiteSpace: "pre-wrap",
              }}
            >
              <Typography variant="h4" mb={2}>
                {o.title}
              </Typography>
              <Typography>{o.value}</Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={2}>
                <Button onClick={() => navigator.clipboard.writeText(o.value)}>
                  Copy
                </Button>
                <Button onClick={() => o.set("")}>Close</Button>
              </Stack>
            </Paper>
          )
      )}

      {/* EXERCISES */}
      <Box mt={6}>
        <SearchExercises
          setExercises={setExercises}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
        <Exercises
          exercises={exercises}
          setExercises={setExercises}
          bodyPart={bodyPart}
        />
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={4000}
        onClose={() => setSnack({ ...snack, open: false })}
      >
        <Alert severity={snack.severity}>{snack.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Home;
