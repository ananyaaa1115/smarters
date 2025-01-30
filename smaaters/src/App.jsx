import React from "react";
import Navbar from "./components/NavBar";
import Banner from "./components/HeroSection";
import { AppBar } from "@mui/material";
import Categories from "./components/Categories";
import HeroSection from "./components/HeroSection";
import NewTrendingSection from "./components/NewTrendingSection";
import Footer from "./components/Footer";
import ProductCarousel from "./components/ProductCarousel";
import CardData from "./components/CardData";
import DealSection from "./components/DealSection";

const App = () => {
  return (
    <div>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", width: "100%",paddingBottom: '16px' }}
      >
        <Navbar />
        <HeroSection/>
        <Categories/>
        <ProductCarousel/>
        <CardData/>
        <DealSection/>
        <Footer/>
      </AppBar>
    </div>
  );
};

export default App;
