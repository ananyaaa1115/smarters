import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box, Chip, Rating } from "@mui/material";

const ProductCard = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 280, borderRadius: 2, boxShadow: 3 }}>
      {/* Product Image */}
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="200"
          image={product.image}
          alt={product.title}
          sx={{ borderRadius: "8px 8px 0 0" }}
        />
        <Chip
          label="25% Off"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            backgroundColor: "#c49a6c",
            color: "#fff",
            fontWeight: "bold",
          }}
        />
      </Box>

      {/* Product Info */}
      <CardContent sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#c49a6c",
            color: "#fff",
            fontSize: "12px",
            borderRadius: "20px",
            width: "100%",
            mb: 1,
          }}
        >
          ADD TO CART
        </Button>
        <Typography variant="body2" fontWeight="bold">
          {product.title}
        </Typography>
        <Typography variant="h6" fontWeight="bold" color="black">
          ₹{product.price}
        </Typography>
        <Typography variant="caption" color="gray">
          5 Variants available
        </Typography>

        {/* Rating & Reviews */}
        <Box display="flex" alignItems="center" justifyContent="center" mt={1}>
          <Rating value={3.2} readOnly precision={0.5} size="small" />
          <Typography variant="body2" sx={{ ml: 1 }}>
            320 Reviews
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;