import React from 'react';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon } from "@mui/icons-material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.paper', 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        textAlign: 'center', // מרכז את הטקסט
        p: 2 // הוסף ריפוד
      }}
    >
      <Typography variant="body2" color="text.secondary">
        &copy; {new Date().getFullYear()}{" "}
        <Link color="inherit" href="#">
          Ayala Yagelnik
        </Link>
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Link href="https://github.com/Ayala-Yagelnik" color="inherit" sx={{ mx: 1 }}>
          <GitHubIcon />
        </Link>
        <Link href="https://linkedin.com" color="inherit" sx={{ mx: 1 }}>
          <LinkedInIcon />
        </Link>
        <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
          <TwitterIcon />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
