import React from "react";
import { Box, IconButton, Typography, Grid, Card, CardMedia, CardContent, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Star as StarIcon, Person as PersonIcon } from "@mui/icons-material";

const products = [
  {
    id: 1,
    title: "Feather A-line Casual Party Wear Dress...",
    price: "₹1,999",
    image: "Rectangle 186 (1).png",
    discount: "10%",
    variants: 5,
    rating: 3.2,
    reviews: 230,
  },
  {
    id: 2,
    title: "Fluffy Fully Insulated Hoodie for Newborns...",
    price: "₹1,999",
    image: "Rectangle 187.png",
    discount: "15%",
    variants: 4,
    rating: 4.5,
    reviews: 150,
  },
  {
    id: 3,
    title: "Casual Frock for Girls Printed Pink Butterfly...",
    price: "₹1,999",
    image: "Rectangle 187 (1).png",
    discount: "20%",
    variants: 3,
    rating: 2.8,
    reviews: 50,
  },
  {
    id: 4,
    title: "Neutral Oversized Trousers for Boys...",
    price: "₹1,999",
    image: "Rectangle 187 (2).png",
    discount: "5%",
    variants: 2,
    rating: 4.0,
    reviews: 90,
  },
];

const ProductCarousel = () => {
  return (
    <Box sx={{ textAlign: "center", my: 3, px: 2 }}>
      {/* Section Title */}
      <Typography variant="h6" fontWeight="bold" color="#c49a6c">
        NEW & TRENDING
      </Typography>
      <Typography variant="body2" sx={{ cursor: "pointer", color: "gray" }}>
        View all
      </Typography>

      {/* Carousel */}
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 2 }}>
        <IconButton sx={{ color: "#c49a6c" }}>
          <ArrowBackIosNewIcon />
        </IconButton>

        <Grid container spacing={2} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id}>
              <Card
                sx={{
                  width: 250,
                  borderRadius: "12px",
                  textAlign: "center",
                  boxShadow: 3,
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  position: "relative",
                }}
              >
                {/* Discount Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    backgroundColor: "#E1C6A2",
                    color: "#000",
                    padding: "5px 10px",
                    borderRadius: "50px",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {product.discount}
                </Box>

                {/* Product Image */}
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.title}
                  sx={{
                    height: 200,
                    objectFit: "cover",
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                  }}
                />

                {/* Add to Cart Button */}
                <Button
                  variant="contained"
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#C5A880",
                    color: "white",
                    borderRadius: "20px",
                    fontSize: "12px",
                    padding: "5px 15px",
                    "&:hover": { backgroundColor: "#B09070" },
                  }}
                >
                  Add to Cart
                </Button>
              </Card>

              {/* Product Details */}
              <Typography
                sx={{
                  color: "#333",
                  fontSize: "16px",
                  fontWeight: "bold",
                  mt: 2,
                }}
              >
                {product.title}
              </Typography>

              <Typography sx={{ color: "#c49a6c", fontSize: "16px", fontWeight: "bold", mt: 1 }}>
                {product.price}
              </Typography>

              <Typography sx={{ fontSize: "14px", color: "#777", mt: 1 }}>
                {product.variants} variants available
              </Typography>

              {/* Rating & Reviews */}
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1 }}>
                <StarIcon sx={{ color: "#FFD700", fontSize: "18px", mr: 0.5 }} />
                <Typography sx={{ fontSize: "14px", color: "#555", mr: 1 }}>
                  {product.rating}/5
                </Typography>
                <PersonIcon sx={{ color: "#777", fontSize: "18px", mr: 0.5 }} />
                <Typography sx={{ fontSize: "14px", color: "#555" }}>{product.reviews} reviews</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        <IconButton sx={{ color: "#c49a6c" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductCarousel;
