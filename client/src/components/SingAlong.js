import React from "react";
import { Button } from "@mui/material";
export default function SingAlong({ score, setScore }) {
  const handleScore = (num) => {
    //TBD
    setScore(score + num); //TBD
  };
  
  //Note:score temporarily displayed 
  return (
    <div className="singAlong">
      <span>
        {/* {questions[currQues].difficulty} */}
        Score : {score}
      </span>
      <Button
        onClick={() => {
          handleScore(1);
        }}
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
      >
        View Score
      </Button>
    </div>
  );
}
