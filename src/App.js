import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import ExerciseDetail from "./Pages/ExerciseDetail";
import Home from "./Pages/Home";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", xl: "1488px" },
        m: "auto",
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
