export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  // Optional: log any error body so you can see it clearly
  if (!response.ok) {
    const text = await response.text();
    console.error("API error:", response.status, text);
    throw new Error("API request failed");
  }

  const data = await response.json();
  return data;
};
