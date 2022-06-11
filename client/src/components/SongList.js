import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Box, Typography } from "@mui/material";

function SongList({ songs, artists }) {
  return (
    <div className="songList">
      <Box
        sx={{
          display: "flex",
          textAlign: "center",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#0B0C10",
        }}
      >
        <Box sx={{ marginTop: "70px", marginBottom: "30px" }}>
          <Typography
            color="#f2f2f2"
            variant="h5"
            sx={{
              fontFamily: "Arvo",
              fontWeight: "700",
              fontStyle: "italic",
              marginBottom: "20px",
            }}
          >
            Choose Your Song
          </Typography>

          <div className="songSelect">
            {songs?.map((song) => {
              const artist = artists.find(
                (artist) => artist.id === song.artistId
              );
              return (
                <div key={song.id} style={{ margin: "1rem" }}>
                  <Typography
                    color="#f2f2f2"
                    sx={{
                      lineHeight: 2,
                      bgcolor: "transparent",
                      "&:hover": { bgcolor: "transparent" },
                    }}
                    style={{ width: "100%", fontSize: "1.5rem" }}
                  >
                    <Link className="songLinks" to={`/preview/${song.id}`}>
                      {song.name} by {artist?.name}
                    </Link>
                  </Typography>
                </div>
              );
            })}
          </div>
        </Box>
      </Box>
    </div>
  );
}

const mapState = ({ songs, artists }) => ({ songs, artists });

export default connect(mapState)(SongList);

//  sx={{ marginTop: "10px", marginBottom: "10px", bottomBorder: "2px solid black" }}>
