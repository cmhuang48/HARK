import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function AboutUs() {
  const item = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: 5,
    height: "100%",
    border: "5px solid #45A29E",
    borderRadius: "20px"
  };

  return (
    <div className="aboutUs">
      <Typography variant="h2" fontFamily="Arvo" fontWeight="700" backgroundColor="#0B0C10" color="#66FCF1" textAlign="center">
        About Us
      </Typography>
      <Box
        component="section"
        sx={{
          display: "flex",
          overflow: "hidden",
          bgcolor: "#0B0C10"
        }}
      >
        <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
          <Grid container spacing={5}>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Typography variant="h5" sx={{ mt: 5, mb: 4 }} fontFamily="Arvo" fontWeight="700" color="white" textAlign="center">
                  Chanelle Huang
                </Typography>
                <div className="icons">
                  <a href="https://github.com/cmhuang48">
                    <GitHubIcon
                      sx={{
                        fontSize: "40px",
                        marginRight: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/chanelle-huang/">
                    <LinkedInIcon
                      sx={{
                        fontSize: "40px",
                        marginLeft: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Typography variant="h5" sx={{ mt: 5, mb: 4 }} fontFamily="Arvo" fontWeight="700" color="white" textAlign="center">
                  Hannah Abbasi
                </Typography>
                <div className="icons">
                  <a href="https://github.com/abbasi08">
                    <GitHubIcon
                      sx={{
                        fontSize: "40px",
                        marginRight: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/hannah-abbasi/">
                    <LinkedInIcon
                      sx={{
                        fontSize: "40px",
                        marginLeft: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Typography variant="h5" sx={{ mt: 5, mb: 4 }} fontFamily="Arvo" fontWeight="700" color="white" textAlign="center">
                  Joshua Reyes
                </Typography>
                <div className="icons">
                  <a href="https://github.com/jcreys">
                    <GitHubIcon
                      sx={{
                        fontSize: "40px",
                        marginRight: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/joshuacreyes/">
                    <LinkedInIcon
                      sx={{
                        fontSize: "40px",
                        marginLeft: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={item}>
                <Typography variant="h5" sx={{ mt: 5, mb: 4 }} fontFamily="Arvo" fontWeight="700" color="white" textAlign="center">
                  Lisa Knox
                </Typography>
                <div className="icons">
                  <a href="https://github.com/LLLisa">
                    <GitHubIcon
                      sx={{
                        fontSize: "40px",
                        marginRight: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                  <a href="https://www.linkedin.com/in/lisa-a-knox/">
                    <LinkedInIcon
                      sx={{
                        fontSize: "40px",
                        marginLeft: "15px",
                        marginBottom: "20px",
                        color: "white",
                        "&:hover": { color: "#45A29E" }
                      }}
                    />
                  </a>
                </div>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" fontFamily="Arvo" color="#C5C6C7" textAlign="center">
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
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h3" fontFamily="Arvo" fontWeight="700" color="#66FCF1" textAlign="center">
                Technologies
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box component="img" src="/images/React.jpeg" alt="clock" sx={{ width: "100%", height: "auto" }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box component="img" src="/images/LALAL.AI.jpeg" alt="clock" sx={{ width: "100%", height: "auto" }} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Box component="img" src="/images/TensorFlow.js.jpeg" alt="clock" sx={{ width: "100%", height: "auto" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
