import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <div className="home">
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#3c2e01",
          backgroundImage: "url('/images/music1.jpeg')",
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          opacity: "0.75",
          boxShadow: 3,
        }}
      >
        <Box>
          <Typography
            color="#66FCF1"
            fontFamily="Arvo"
            fontWeight="700"
            fontStyle={{ textShadow: "2px 2px 2px #45A29E" }}
            sx={{ marginTop: "50px", marginBottom: "40px" }}
            variant="h1"
          >
            CAN YOU SING?
          </Typography>
          <Button
            href="/songs"
            variant="contained"
            sx={{
              bgcolor: "#1F2833",
              "&:hover": { bgcolor: "#45A29E" },
            }}
            style={{
              m: 1,
              width: "40%",
              padding: "20px",
              fontFamily: "Arvo",
              fontSize: "1.5rem",
            }}
          >
            LET'S HEAR IT!
          </Button>
        </Box>
      </Box>
    </div>
  );
}
