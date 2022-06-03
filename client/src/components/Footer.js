import React from "react";
import { Box, MenuItem, Toolbar, Typography } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      <Box sx={{ boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "right", bgcolor: "#3c2e01" }}>
          <MenuItem sx={{ "&:hover": { bgcolor: "transparent" } }}>
            <Typography color="#f5ebce" variant="subtitle">
              Footer text here
            </Typography>
          </MenuItem>
        </Toolbar>
      </Box>
    </div>
  );
}
