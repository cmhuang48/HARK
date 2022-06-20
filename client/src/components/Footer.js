import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <Link className="aboutLink" to="/aboutus">
          <Typography
            variant="h6"
            fontFamily="Arvo"
            color="#66FCF1"
            textAlign="center"
            fontStyle={{
              textShadow: "1px 1px 1px #000404",
            }}
          >
            About Us
          </Typography>
        </Link>
        <Typography
          variant="body2"
          color="#C5C6C7"
          align="center"
          style={{ marginTop: "4px", marginBottom: "10px" }}
        >
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
