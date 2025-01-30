import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

const sections = [
  {
    title: "DEALS ON NEW BORN CLOTHES",
    discount: "Flat 50% Off",
    items: [
      { name: "Summer clothes", price: "₹1000", image: "baby.png" },
      { name: "Party wear", price: "₹1000", image: "baby1.png" },
      { name: "Jumpers", price: "₹1000", image: "baby2.png" },
      { name: "Night suit", price: "₹1000", image: "baby3.png" },
      { name: "Burp clothes", price: "₹1000", image: "baby4.png" },
      { name: "Casual Dress", price: "₹1000", image: "baby4.png" },
    ],
  },
  {
    title: "DEALS ON KIDS CLOTHES (HER)",
    discount: "Flat 50% Off",
    items: [
      { name: "Summer clothes", price: "₹1000", image: "girl1.png" },
      { name: "Summer clothes", price: "₹1000", image: "girl2.png" },
      { name: "Summer clothes", price: "₹1000", image: "girl3.png" },
      { name: "Summer clothes", price: "₹1000", image: "girl4.png" },
      { name: "Summer clothes", price: "₹1000", image: "girl5.png" },
      { name: "Summer clothes", price: "₹1000", image: "girl4.png" },
    ],
  },
  {
    title: "DEALS ON KIDS CLOTHES (HIM)",
    discount: "Flat 50% Off",
    items: [
      { name: "Summer clothes", price: "₹1000", image: "boy1.png" },
      { name: "Summer clothes", price: "₹1000", image: "boy2.png" },
      { name: "Summer clothes", price: "₹1000", image: "boy3.png" },
      { name: "Summer clothes", price: "₹1000", image: "boy4.png" },
      { name: "Summer clothes", price: "₹1000", image: "boy5.png" },
      { name: "Summer clothes", price: "₹1000", image: "boy4.png" },
    ],
  },
];

const DealSection = () => {
  return (
    <Box sx={{ backgroundColor: "#F9F6F1", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="xl">
        {sections.map((section, index) => (
          <Box key={index} sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h6"
              sx={{ color: "#8B5A2B", fontWeight: "bold" }}
            >
              {section.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{ color: "#8B5A2B", fontWeight: "bold", my: 1 }}
            >
              {section.discount}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#8B5A2B",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              View all
            </Typography>
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
              {section.items.map((item, idx) => (
                <Grid item key={idx} xs={12} sm={6} md={4} lg={2}>
                  <Box
                    sx={{
                      position: "relative",
                      height: 200,
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      borderRadius: 2,
                      display: "flex",
                      alignItems: "flex-end",
                      justifyContent: "center",
                      p: 2,
                      color: "#FFF",
                      fontWeight: "bold",
                      textShadow: "1px 1px 5px rgba(0,0,0,0.7)",
                    }}
                  >
                    <Typography variant="body1">{item.name}</Typography>
                    <Typography variant="body2">{item.price}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default DealSection;
