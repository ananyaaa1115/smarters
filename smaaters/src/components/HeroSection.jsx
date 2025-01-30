import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#ECE9E4",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "64px", // Add margin to account for the fixed AppBar height
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center"> {/* Centering the grid */}
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Literata, sans-serif",
                fontSize: "56px",
                color: "#815B34",
                fontWeight: 400,
                lineHeight: "74.28px",
                textAlign: "left",
                letterSpacing: "0.2rem",
              }}
            >
              Up to 30% Off
            </Typography>
          </Grid>
      
        </Grid>
        <div style={{ textAlign: "center", marginTop: "16px" }}> {/* New div for button */}
          <Typography
            variant="body1"
            sx={{
              color: "#876C51",
              fontFamily: "Literata",
              fontSize: "24px",
              fontWeight: "700",
              lineHeight: "35.64px",
            }}
          >
            ON ALL AUTUMN FASHION WEAR
          </Typography>
          <Button
            variant="contained"
            sx={{
              width: "240.68px",
              fontFamily: "Satoshi",
              fontWeight: "700",
              fontSize: "23.22px",
              lineHeight: "32.51px",
              height: "79.61px",
              color: "#FFFFFF",
              backgroundColor: "#C5A880",
              borderRadius: "66.34px",
              border: "4.98px solid #FFFFFF",
              padding: "16.59px 66.34px",
              marginTop: "16px", // Add margin to separate from text
            }}
          >
            Shop Now
          </Button>
        </div>
        <Grid item xs={12} sm={6} container justifyContent="center">
            <img
              src="6707 1.png" // Replace with your image URL
              alt="Autumn Fashion Wear"
              style={{
                width: "100%", // Ensure the image takes the full width of the grid item
                maxWidth: "400px", // Adjust max width as needed
                height: "auto", // Maintain aspect ratio
              }}
            />
          </Grid>
      </Box>
    </div>
  );
};

export default HeroSection;
