import React from "react";
import { Box, Button } from "@mui/material";
import ScoreDonut from "./ScoreDonut";

export default function Score({ score }) {
  return (
    <div className="score">
      <Box>
        <span className="title">Final Score : {score}</span>
        <Button variant="contained" color="secondary" size="large" style={{ alignSelf: "center", marginTop: 20 }} href="/songs">
          Sing Another Song?
        </Button>
        <Button variant="contained" color="secondary" size="large" style={{ alignSelf: "center", marginTop: 20 }} href="/">
          Return to Home
        </Button>
      </Box>
    </div>
  );
}
