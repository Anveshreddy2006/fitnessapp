import React, { useContext, useEffect } from "react";
import { Chip } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import { AuthContext } from "../auth/AuthContext";

const StreakBadge = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    const today = new Date().toDateString();
    const last = user.lastActive;

    let newStreak = user.streak;

    if (last !== today) {
      const diff =
        last && (new Date(today) - new Date(last)) / (1000 * 60 * 60 * 24);

      newStreak = diff === 1 ? user.streak + 1 : 1;

      const updated = {
        ...user,
        streak: newStreak,
        lastActive: today,
      };

      localStorage.setItem("user", JSON.stringify(updated));
      setUser(updated);
    }
  }, []);

  if (!user) return null;

  return (
    <Chip
      icon={<LocalFireDepartmentIcon />}
      label={`${user.streak} day streak`}
      color="warning"
      sx={{ fontWeight: 600 }}
    />
  );
};

export default StreakBadge;
