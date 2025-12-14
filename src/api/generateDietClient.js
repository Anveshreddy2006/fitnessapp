export async function generateDietPlan(promptText) {
  const resp = await fetch("http://localhost:3001/api/generateDiet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: promptText }),
  });

  if (!resp.ok) {
    throw new Error("Failed to generate diet plan");
  }

  return resp.json();
}
