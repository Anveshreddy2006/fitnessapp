export async function generateWorkoutPlan(promptText) {
  const resp = await fetch("/api/generateWorkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: promptText }),
  });

  if (!resp.ok) {
    throw new Error("Failed to generate workout plan");
  }

  return resp.json();
}
