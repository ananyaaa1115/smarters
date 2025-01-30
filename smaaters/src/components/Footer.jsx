import React from "react";
import { Box, Typography, TextField, Button, Grid, IconButton, InputAdornment } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#EAD7C5", color: "#6B4F4F", textAlign: "center", py: 4 }}>
      {/* Header Section */}
      <Box>
        <Typography variant="h6" fontWeight="bold">
          MADE WITH LOVE
        </Typography>
      </Box>

      {/* Subscription Section */}
      <Box sx={{ mt: 2, maxWidth: 500, mx: "auto" }}>
        <Typography variant="subtitle1" fontWeight="bold">
          SUBSCRIBE FOR EXCLUSIVE SALES & NEWS
        </Typography>
        <Typography variant="body2" sx={{ my: 1 }}>
          We will provide detailed information about our services, types of work, and top projects.
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Enter your phone number"
          fullWidth
          sx={{ bgcolor: "white", borderRadius: "5px", mt: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#6B4F4F", "&:hover": { bgcolor: "#543F3F" }, height: "100%" }}
                >
                  SEND REQUEST
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ mt: 3 }}>
        Copyrights 2024. | All Rights Reserved. | Privacy | Terms | Infringement
      </Typography>

      {/* Footer Content */}
      <Box sx={{ bgcolor: "#F5E6DA", borderRadius: "10px", p: 3, mt: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {/* 5 Columns */}
          {["FASHION", "SUPPORT & HELP", "BUSINESS & LEGAL", "QUICK LINKS", "CONTACT INFO"].map(
            (title, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index}>
                <Typography fontWeight="bold">{title}</Typography>
                {title === "CONTACT INFO" ? (
                  <Box sx={{ textAlign: "left", mt: 1 }}>
                    <img src="logo.png" alt="Company Logo" width="100" />
                    <Typography>+1 891 989-11-91</Typography>
                    <Typography>info@logpisum.com</Typography>
                  </Box>
                ) : (
                  <>
                    <Typography>Chat with Customer Service</Typography>
                    <Typography>Contact us</Typography>
                    <Typography>Send feedback</Typography>
                    <Typography>Fashion</Typography>
                  </>
                )}
              </Grid>
            )
          )}
        </Grid>

        {/* Social & Callback Buttons */}
        <Box sx={{ display: "flex", justifyContent: "end", alignItems: "center", mt: 2, gap: 1 }}>
          <Button variant="contained" sx={{ bgcolor: "#6B4F4F", "&:hover": { bgcolor: "#543F3F" } }}>
            CALL BACK
          </Button>
          <IconButton sx={{ bgcolor: "#6B4F4F", color: "white" }}>
            <WhatsAppIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "#6B4F4F", color: "white" }}>
            <ChatIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
