import React from "react";
import { Box, Typography } from "@mui/material";

export default function SongList() {
  return (
    <div className="songList">
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5ebce"
        }}
      >
        <Box>
          <Typography color="#4f3b03" sx={{ fontFamily: "Merienda", marginTop: "80px", marginBottom: "20px" }} variant="h3">
            Choose Your Song
          </Typography>
          <ul>
            <li>Sweet Caroline</li>
          </ul>
        </Box>
      </Box>
    </div>
  );
}
