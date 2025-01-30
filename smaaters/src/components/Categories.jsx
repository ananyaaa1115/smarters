import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,a
} from "@mui/material";
import React from "react";

const Categories = () => {
  const cards = [
    {
      image: "Rectangle 186.png",
      title: "Shop for kids (Him)",
    },
    {
      image: "Rectangle 186 (1).png",
      title: "Shop for kids (Her)",
    },
    {
      image: "Rectangle 186 (2).png",
      title: "Shop for New Born",
    },
  ];

  return (
    <div>
      <Box
        sx={{
          width: "1440px",
          height: "106px",
          padding: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Satoshi",
            color: "#C4A180",
            fontSize: "24px",
            fontWeight: 700,
            lineHeight: "33.6px",
            letterSpacing: "0.08em",
          }}
        >
          CATEGORIES
        </Typography>
      </Box>
      <Grid container spacing={2} sx={{ padding: "20px" }}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#978266",
                borderRadius: "8px",
                margin: "20px",
              }}
            >
              <CardMedia
                component="img"
                height="fit"
                image={card.image}
                alt={`Image for ${card.title}`}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold",
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
