import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Button,
  Box,
  Grid,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  CardContent,
  CardMedia,
  Card,
} from "@mui/material";
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Menu as MenuIcon,
  Star as StarIcon,
  Person as PersonIcon,
} from "@mui/icons-material";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    "Home",
    "New & Trending",
    "All Categories",
    "My Orders",
    "About Us",
    "Customer Support",
  ];
  return (
    <>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
        }}
      >
        {isMobile && (
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ marginRight: "16px" }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src="logo.png"
            alt="Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            alignItems: "center",
            position: "relative",
            marginX: "16px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#F0F0F0",
              borderRadius: "4px",
              padding: "8px",
              flexGrow: 1,
            }}
          >
            <SearchIcon sx={{ color: "#777777" }} />
            <InputBase
              placeholder="Search for products..."
              sx={{
                color: "black",
                backgroundColor: "transparent",
                paddingLeft: "8px",
                "&::placeholder": {
                  color: "#777777",
                },
                width: "100%",
              }}
            />
          </Box>
        </Box>
        <IconButton color="primary" sx={{ color: "#000000" }}>
          <ShoppingCartIcon />
        </IconButton>
        {!isMobile && (
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              width: "90px",
              height: "48px",
              padding: "10px 24px",
              borderRadius: "10px",
              color: "#FFFFFF",
              backgroundColor: "#A8794D",
            }}
          >
            Login
          </Button>
        )}
      </Toolbar>

      {/* Desktop Menu Items */}
      {!isMobile && (
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#FFFFFF",
            padding: 0,
          }}
        >
          {menuItems.map((item) => (
            <Button key={item} sx={{ color: "#A98C71", margin: "0 10px" }}>
              {item}
            </Button>
          ))}
        </Toolbar>
      )}

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250, backgroundColor: "#FFFFFF" }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} sx={{ color: "#A98C71" }} />
              </ListItem>
            ))}
            <ListItem button>
              <ListItemText primary="Login" sx={{ color: "black" }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
