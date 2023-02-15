import { Box, Paper, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { checkPasswordStrength } from "../utils/passwordStrength";

export const Password = () => {
  const [password, setPassword] = useState("");
  const [strangthStyles, setStrangthStyles] = useState(
    checkPasswordStrength(password)
  );
  const { firstSectionColor, secondSectionColor, thirdSectionColor, message } =
    strangthStyles;

  useEffect(() => {
    setStrangthStyles(checkPasswordStrength(password));
  }, [password]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: "5px",
          mb:"10px"
        }}
      >
        <Paper
          sx={{ height: "10px", width: "60px", background: firstSectionColor }}
        />
        <Paper
          sx={{ height: "10px", width: "60px", background: secondSectionColor }}
        />
        <Paper
          sx={{ height: "10px", width: "60px", background: thirdSectionColor }}
        />
      </Box>
      <Typography>{message}</Typography>
    </Box>
  );
};
