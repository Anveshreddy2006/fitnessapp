import React, { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import { fetchData, normalizeExercises } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);
  const [allExercises, setAllExercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const raw = await fetchData(
          "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json"
        );
        const normalized = normalizeExercises(raw);

        setAllExercises(normalized);

        const bodyPartsArray = [
          "all",
          ...new Set(normalized.map((item) => item.bodyPart).filter(Boolean)),
        ];

        setBodyParts(bodyPartsArray);
      } catch (error) {
        console.error("Failed to load body parts:", error);
      }
    };

    fetchExercisesData();
  }, []);

  const handleSearch = () => {
    if (!search) return;

    const s = search.toLowerCase();

    const searchedExercises = allExercises.filter(
      (item) =>
        item.name?.toLowerCase().includes(s) ||
        item.target?.toLowerCase().includes(s) ||
        item.equipment?.toLowerCase().includes(s) ||
        item.bodyPart?.toLowerCase().includes(s)
    );

    window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });

    setSearch("");
    setExercises(searchedExercises);
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="49px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
          bodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
