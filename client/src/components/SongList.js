import React from "react";
import { Box, Link, Typography } from "@mui/material";

export default function SongList() {
  // const [pitches, setPitches] = useState([])

  // useEffect(
  //   , [pitches]);


  return (
    <div className="songList">
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#f5ebce",
        }}
      >
        <Box sx={{ marginTop: "100px", marginBottom: "30px" }}>
          <Typography
            color="#4f3b03"
            variant="h5"
            sx={{
              fontFamily: "Merienda",
              marginBottom: "8px",
              fontStyle: "italic",
              lineHeight: "normal",
            }}
          >
            Choose Your Song
          </Typography>
          <div>
            {/* <Link href="/preview" color="#3c2e01" variant="body1" underline="none" sx={{ lineHeight: 2, bgcolor: "transparent", "&:hover": { bgcolor: "transparent" } }} style={{ width: "70%", fontSize: "2rem" }}> */}
            <Typography>Sweet Caroline </Typography>
            {/* </Link> */}
            {/* <Link href="/preview" color="#3c2e01" variant="body1" underline="none" sx={{ lineHeight: 2, bgcolor: "transparent", "&:hover": { bgcolor: "transparent" } }} style={{ width: "70%", fontSize: "2rem" }}> */}
            <Typography> A Thousand Miles</Typography> {/* </Link> */}
            <Typography>Just The Way You Are</Typography>
            <Typography>Since You Been Gone</Typography>
          </div>
        </Box>
      </Box>
    </div>
  );
}
