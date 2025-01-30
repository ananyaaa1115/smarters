import React from "react";
import { Box } from "@mui/material";
import CategoryCard from "./Card";
const categories = [
    {
      id: 1,
      title: "FOR CUSTOMIZATION",
      buttonColor: "white",
      textColor: "white",
      image: "Vector.png", // Replace with actual image
    },
    {
      id: 2,
      title: "SUMMER EVENT",
      buttonColor: "white",
      textColor: "white",
      image: "Vector1.png",
    },
    {
      id: 3,
      title: "BEST SELLER",
      buttonColor: "#8B6A4F",
      textColor: "#8B6A4F",
      image: "Group.png",
    },
    {
      id: 4,
      title: "NEW ARRIVALS",
      buttonColor: "black",
      textColor: "black",
      image: "Group1.png",
    },
  ];
  

const CardData = () => {
  return (
    <Box sx={{ maxWidth: "1100px", margin: "auto", p: 3 }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </Box>
    </Box>
  );
};

export default CardData;
