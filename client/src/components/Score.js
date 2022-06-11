import React from "react";
import { Button } from "@mui/material";

export default function Score({ score }) {
  return (
    <div className="score">
      <span className="title">Final Score : {score}</span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/songs"
      >
        Sing Another Song?
      </Button>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Return to Home
      </Button>
    </div>
  );
}
