import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const apiResp = await fetch(
      "https://generativelanguage.googleapis.com/...",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          /* payload */
        }),
      }
    );

    const data = await apiResp.json();
    res.status(200).json({ dietPlan: data });
  } catch (err) {
    res.status(500).json({ error: "Server failed" });
  }
}
