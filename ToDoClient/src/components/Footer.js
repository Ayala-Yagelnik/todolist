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
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: '10px 20px',
        zIndex: 2000,
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
