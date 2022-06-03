import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="home">
      <Box
        // position="static"
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url(https://hosting.photobucket.com/images/i158/thorny_roses/music1.jpeg)",
          minHeight: "750px",
          backgroundSize: "cover"
        }}
      >
        <Box>
          <Typography color="#4f3b03" sx={{ fontFamily: "Merienda", marginTop: "50px", marginBottom: "30px" }} variant="h1">
            Can you sing?
          </Typography>
          <Button color="inherit" style={{ m: 1, width: "40%", padding: "10px", fontSize: "1rem" }} variant="contained">
            LET'S HEAR IT
          </Button>
        </Box>
      </Box>
    </div>
  );
}
