const RAW_IMAGE_BASE =
  "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises";

export const fetchData = async (url, options = {}) => {
  const res = await fetch(url, options);

  if (!res.ok) {
    const msg = `API request failed with status ${res.status}`;
    console.error(msg);
    throw new Error(msg);
  }

  return res.json();
};

export const normalizeExercises = (rawExercises) =>
  rawExercises.map((ex) => {
    const primary = ex.primaryMuscles?.[0] || ex.bodyPart || "unknown";
    const firstImage = ex.images?.[0];

    return {
      ...ex,
      bodyPart: ex.bodyPart || primary,
      target: ex.target || primary,
      equipment: ex.equipment || "body weight",
      gifUrl:
        ex.gifUrl || (firstImage ? `${RAW_IMAGE_BASE}/${firstImage}` : ""),
    };
  });
