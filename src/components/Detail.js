import React from "react";
import { Stack, Typography, Box, Button, useTheme } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const theme = useTheme();
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail || {};

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="40px"
      sx={{
        flexDirection: { lg: "row" },
        p: "20px",
        alignItems: "center",
        bgcolor: "background.default",
      }}
    >
      <Box
        component="img"
        src={gifUrl}
        alt={name}
        loading="lazy"
        sx={{
          width: { xs: "100%", md: 560 },
          height: { xs: 260, md: 560 },
          objectFit: "cover",
          borderRadius: 2,
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 8px 30px rgba(0,0,0,0.7)"
              : "0 10px 30px rgba(20,20,20,0.06)",
        }}
      />

      <Stack sx={{ gap: { lg: "24px", xs: "16px" } }}>
        <Typography
          sx={{ fontSize: { lg: "44px", xs: "28px" } }}
          fontWeight={700}
          textTransform="capitalize"
          color="text.primary"
        >
          {name}
        </Typography>

        <Typography
          sx={{ fontSize: { lg: "20px", xs: "16px" } }}
          color="text.secondary"
        >
          Exercises keep you strong.{" "}
          <span
            style={{
              textTransform: "capitalize",
              color: theme.palette.text.primary,
            }}
          >
            {name}
          </span>{" "}
          is one of the best exercises to target your {target}. It will help you
          improve your mood and gain energy.
        </Typography>

        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="16px" alignItems="center">
            <Button
              sx={{
                background:
                  theme.palette.mode === "dark" ? "#111215" : "#FFF2DB",
                borderRadius: "50%",
                width: "80px",
                height: "80px",
                minWidth: "80px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={item.icon}
                alt={item.name}
                sx={{ width: 36, height: 36 }}
              />
            </Button>

            <Typography
              textTransform="capitalize"
              sx={{ fontSize: { lg: "22px", xs: "16px" } }}
              color="text.primary"
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
