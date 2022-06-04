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
          bgcolor: "#3c2e01",
          backgroundImage: "url(https://hosting.photobucket.com/images/i158/thorny_roses/music1.jpeg)",
          minHeight: "750px",
          width: "100%",
          backgroundSize: "cover",
          opacity: "0.75",
          boxShadow: 3
        }}
      >
        <Box>
          <Typography color="#4f3b03" fontFamily="Merienda" sx={{ marginTop: "50px", marginBottom: "40px" }} variant="h1">
            Can you sing?
          </Typography>
          <Button href="/songs" variant="contained" sx={{ bgcolor: "#3c2e01", "&:hover": { bgcolor: "#866c20" } }} style={{ m: 1, width: "40%", padding: "10px", fontSize: "1rem" }}>
            LET'S HEAR IT
          </Button>
        </Box>
      </Box>
    </div>
  );
}
