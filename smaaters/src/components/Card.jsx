import React from "react";
import { Box, Button, Typography } from "@mui/material";

const CategoryCard = ({ category }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "300px",
        background: `url(${category.image}) center/cover no-repeat`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      />
      
      {/* Content */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: category.textColor, mb: 2 }}
        >
          {category.title}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: category.buttonColor,
            color: category.buttonColor === "white" ? "black" : "white",
            borderRadius: "20px",
            px: 3,
            py: 1,
            fontWeight: "bold",
            "&:hover": { opacity: 0.8, backgroundColor: category.buttonColor },
          }}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
};

export default CategoryCard;
