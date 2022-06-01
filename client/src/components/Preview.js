import React from "react";
import HeadphonesIcon from "@mui/icons-material/Headphones";

export default function Preview() {
  return (
    <div className="preview">
      <HeadphonesIcon />
      <h1>Wired headphones recommended!</h1>
      <h2>
        Headphones reduce noise and feedback, so you'll get the most accurate
        score.
      </h2>
    </div>
  );
}
