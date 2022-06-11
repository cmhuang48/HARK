import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export default function AboutUs() {
  const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
  };

  return (
    <div className="aboutUs">
      <Typography
        variant="h2"
        fontFamily="Arvo"
        fontWeight="700"
        backgroundColor="#0B0C10"
        color="#66FCF1"
        textAlign="center"
        paddingTop="30px"
      >
        About Us
      </Typography>
      <Box
        component="section"
        sx={{
          display: "flex",
          overflow: "hidden",
          bgcolor: "#0B0C10",
        }}
      >
        <Container
          sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/"
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography
                  variant="h5"
                  sx={{ my: 5 }}
                  fontFamily="Arvo"
                  fontWeight="700"
                  color="#45A29E"
                >
                  Chanelle Huang
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/"
                  alt="suitcase"
                  sx={{ height: 55 }}
                />
                <Typography
                  variant="h5"
                  sx={{ my: 5 }}
                  fontFamily="Arvo"
                  fontWeight="700"
                  color="#45A29E"
                >
                  Hannah Abbasi
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box component="img" src="/" alt="graph" sx={{ height: 55 }} />
                <Typography
                  variant="h5"
                  sx={{ my: 5 }}
                  fontFamily="Arvo"
                  fontWeight="700"
                  color="#45A29E"
                >
                  Joshua Reyes
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Box component="img" src="/" alt="clock" sx={{ height: 55 }} />
                <Typography
                  variant="h5"
                  sx={{ my: 5 }}
                  fontFamily="Arvo"
                  fontWeight="700"
                  color="#45A29E"
                >
                  Lisa Knox
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={item}>
                <Typography
                  variant="h5"
                  fontFamily="Arvo"
                  color="#C5C6C7"
                  textAlign="center"
                >
                  {`The four of us met at Fullstack Academy and built this karaoke
                  app together as our capstone project. HARK is the combination
                  of our last initials and means "to listen," which we found
                  perfect for our project. Joining our loves for music and
                  coding, we explored new technologies, including LALAL.AI for
                  splitting tracks and TensorFlow SPICE model for pitch
                  detection.`}
                  <br />
                  <br />
                  {`You may select a song, listen to the original
                  artist, sing along with the instrumental tracks and lyrics,
                  and receive a score based on accuracy of pitch compared to the
                  original vocal track. Please make some music and have fun!`}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={item}>
                <Typography
                  variant="h4"
                  fontFamily="Arvo"
                  fontWeight="700"
                  color="#45A29E"
                  textAlign="center"
                >
                  Technologies
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/images/React.jpeg"
                  alt="clock"
                  sx={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/images/LALAL.AI.jpeg"
                  alt="clock"
                  sx={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/images/TensorFlow.js.jpeg"
                  alt="clock"
                  sx={{ width: "100%", height: "auto" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
