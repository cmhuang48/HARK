import React from "react";
import { Link } from "react-router-dom";
import { Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      {" "}
      <Link className="aboutLink" to="/aboutus">
        <Typography
          variant="h5"
          fontFamily="Arvo"
          color="#C5C6C7"
          textAlign="center"
        >
          About Us
        </Typography>
      </Link>
      <Container
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Typography variant="body2" color="#C5C6C7" align="center">
          {"Copyright © "}
          <Link className="homeLink" to="/">
            HARK
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
}
