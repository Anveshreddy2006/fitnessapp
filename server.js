import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

console.log("RUNNING ROOT SERVER.JS");
console.log("Node:", process.version);

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT_SERVER || 3001;

// ❌ Fail fast if API key is missing
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env");
  process.exit(1);
}

// ✅ Initialize Gemini client ONCE
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ✅ Optional health check
app.get("/health", (_, res) => {
  res.json({ status: "ok" });
});

// ✅ Diet generation endpoint
app.post("/api/generateDiet", async (req, res) => {
  try {
    const prompt =
      req.body?.prompt ||
      `
Create a 7-day Indian bodybuilding diet plan focused on muscle gain.

Requirements:
- High-protein meals (vegetarian-friendly)
- Include breakfast, mid-morning snack, lunch, evening snack, dinner
- Mention approximate calories and protein per meal
- Daily total calories: 2800–3200 kcal
- Daily protein target: 1.8–2.2 g per kg body weight
- Include hydration tips and pre/post-workout nutrition
- Use clear headings for each day
- Format using bullet points
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      dietPlan: response.text,
    });
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).json({
      error: "Gemini API failed",
      detail: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`✅ API server listening on http://localhost:${PORT}`);
});

// ✅ Weekly Workout Plan API
app.post("/api/generateWorkout", async (req, res) => {
  try {
    const prompt =
      req.body?.prompt ||
      `
Create a 7-day gym workout plan for bodybuilding.

Requirements:
- Suitable for intermediate gym-goers
- Focus on muscle hypertrophy and strength
- Split: Push / Pull / Legs / Chest / Back / Shoulders / Arms
- Mention exercises, sets, reps, and rest time
- Include warm-up and cooldown suggestions
- 60–75 minutes per workout
- Include 1 active recovery or rest day
- Use clear headings for each day
- Format using bullet points
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      workoutPlan: response.text,
    });
  } catch (err) {
    console.error("Workout Gemini error:", err);
    res.status(500).json({
      error: "Workout generation failed",
      detail: err.message,
    });
  }
});
