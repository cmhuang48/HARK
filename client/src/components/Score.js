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
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
}
