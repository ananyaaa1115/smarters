import React from "react";
import { Box, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import { Star as StarIcon, Person as PersonIcon } from "@mui/icons-material";

const products = [
  {
    id: 1,
    image: "/Rectangle 186 (1).png",
    title: "Product 1",
    price: 29.99,
    variants: 5,
    rating: 3.2,
    reviews: 230,
    discount: "10%",
  },
  {
    id: 2,
    image: "Vector.png",
    title: "Product 2",
    price: 39.99,
    variants: 4,
    rating: 4.5,
    reviews: 150,
    discount: "15%",
  },
  {
    id: 3,
    image: "image3.png",
    title: "Product 3",
    price: 49.99,
    variants: 3,
    rating: 2.8,
    reviews: 50,
    discount: "20%",
  },
  {
    id: 4,
    image: "image4.png",
    title: "Product 4",
    price: 19.99,
    variants: 2,
    rating: 4.0,
    reviews: 90,
    discount: "5%",
  },
];

const NewTrendingSection = () => {
  return (
    <Box
      sx={{
        width: "1440px", // Fill width
        height: "106px", // Fixed height
        padding: "40px", // Padding on all sides
        display: "flex", // Flexbox layout
        justifyContent: "center", // Align items to the start
        alignItems: "center", // Center align items vertically
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column", // Stack items vertically
          justifyContent: "center", // Center items
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
          New & trending
        </Typography>

        <Typography
          sx={{
            fontFamily: "Noto Serif Thai", // Set the font family
            color: "#815B34", // Set the color
            fontSize: "16px", // Set the font size
            fontWeight: 700, // Set the font weight
            lineHeight: "22.4px", // Set the line height
            letterSpacing: "0.1em", // Set the letter spacing
            textAlign: "left", // Align text to the left
            textDecorationLine: "underline", // Underline text
            marginTop: "8px", // Add some space between the two texts
            cursor: "pointer", // Change cursor on hover
          }}
        >
          View All
        </Typography>
      </Box>

      <Grid container justifyContent="center" spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}>
            <Card
              sx={{
                backgroundColor: "#978266", // Card background color
                borderRadius: "8px", // Optional: Add border radius
                maxWidth: 300, // Set max width of the card
                margin: "20px", // Optional: Margin around the card
                position: "relative", // To position discount badge
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  backgroundColor: "#E1C6A2", // Background color for discount
                  padding: "4px 8px",
                  borderRadius: "4px",
                  fontWeight: "bold",
                }}
              >
                {product.discount}
              </Box>
              <CardMedia
                component="img" // Use 'img' for image
                height="200" // Fixed height for image
                image={product.image} // Replace with your image URL
                alt={product.title} // Alt text for the image
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
                    marginBottom: "8px", // Space below the title
                  }}
                >
                  {product.title}
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#C5A880", // Button color
                    color: "#FFFFFF", // Text color
                    borderRadius: "4px", // Border radius for button
                    marginBottom: "8px", // Space below the button
                  }}
                >
                  Add to Cart
                </Button>
                <Typography
                  sx={{
                    color: "white", // Text color for price
                    fontSize: "16px", // Font size
                    marginBottom: "8px", // Space below the price
                  }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
                <Typography
                  sx={{
                    color: "white", // Text color for variants
                    fontSize: "14px", // Font size
                    marginBottom: "8px", // Space below variants
                  }}
                >
                  {product.variants} variants available
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <StarIcon sx={{ color: "#FFD700", marginRight: "4px" }} />
                  <Typography
                    sx={{
                      color: "white", // Text color for rating
                      fontSize: "14px", // Font size for rating
                      marginRight: "8px", // Space between rating and reviews
                    }}
                  >
                    {product.rating}/5
                  </Typography>
                  <PersonIcon sx={{ color: "white", marginRight: "4px" }} />
                  <Typography sx={{ color: "white", fontSize: "14px" }}>
                    {product.reviews} reviews
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewTrendingSection;
