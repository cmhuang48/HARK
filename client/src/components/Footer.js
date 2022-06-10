import React from "react";
import { Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
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
          <Link color="inherit" to="/">
            HARK
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
}
