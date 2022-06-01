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
      <h3>Watch Bruno Mars sing it!</h3>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/LjhCEhWiKXk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/GmK5_lnQUbE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/R7UrFYvl5TE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Cwkej79U3ek"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
