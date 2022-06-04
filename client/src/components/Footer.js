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
        <Typography variant="body2" color="#f5ebce" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://localhost:3000">
            HARK
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </div>
  );
}
