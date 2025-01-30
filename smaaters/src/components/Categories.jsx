import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const Categories = () => {
  const cards = [
    {
      image: "Rectangle 186.png", // Replace with your image URL
      title: "Shop for kids (Him)",
    },
    {
      image: "Rectangle 186 (1).png", // Replace with your image URL
      title: "Shop for kids (Her)",
    },
    {
      image: "Rectangle 186 (2).png", // Replace with your image URL
      title: "Shop for New Born",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          width: "1440px", // Fill width
          height: "106px", // Fixed height
          padding: "40px", // Padding on all sides
          display: "flex", // Flexbox layout
          justifyContent: "center", // Space between items
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Satoshi", // Set the font family
            color: "#C4A180",
            fontSize: "24px", // Set the font size
            fontWeight: 700, // Set the font weight
            lineHeight: "33.6px", // Set the line height
            letterSpacing: "0.08em", // Set the letter spacing
          }}
        >
          CATEGORIES
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {cards.map((card, index) => (
          <Grid
            item
            xs={12} // 1 card per row on mobile (12/12)
            sm={4} // 3 cards per row on desktop (4/12)
            key={index}
          >
            <Card
              sx={{
                backgroundColor: "#978266", // Background color
                borderRadius: "8px", // Optional: Add border radius
                margin: "20px", // Optional: Margin around the card
              }}
            >
              <CardMedia
                component="img" // Use 'img' for image
                height="fit" // Set height of the image
                image={card.image} // Use the respective image URL
                alt={`Image for ${card.title}`} // Alt text for the image
                sx={{
                  objectFit: "cover", // Cover the entire area
                  width: "100%", // Ensure full width
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "white", // Text color
                    fontSize: "18px", // Font size
                    fontWeight: "bold", // Font weight
                  }}
                  gutterBottom
                >
                  {card.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Categories;
