import React, { useRef, useEffect } from "react";
import DonutChart from "donut-chart-js";

export default function ScoreDonut({ score }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    console.log("score", score);
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    new DonutChart(document.getElementById("myChart"), {
      data: [
        { label: "teal", value: Math.round(score), color: "#66FCF1" },
        { label: "grey", value: 100 - Math.round(score), color: "#C5C6C7" },
      ],
      holeSize: 0.6,
      animationSpeed: 0.5,
    });
  }, [score]);

  return (
    <canvas
      ref={canvasRef}
      id="myChart"
      width="400px"
      height="400px"
      margin="20px"
    ></canvas>
  );
}
