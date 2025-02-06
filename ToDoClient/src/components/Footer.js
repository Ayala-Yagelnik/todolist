import React from 'react';
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Twitter as TwitterIcon } from "@mui/icons-material";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const Footer = () => {
    return (
        <footer >
          <Box sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 ,backgroundColor:'white'}}>
            <div className="footer-icons">
                <Typography variant="body2" color="text.secondary" align="center">
                    &copy;
                    <Link color="inherit" href="https://todolist.com/">
                        ToDoList.com
                    </Link>{" "}
                    {new Date().getFullYear()}
                    {"."}
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    Follow us on:
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                    <Link href="https://github.com" color="inherit" sx={{ mx: 1 }}>
                        <GitHubIcon />
                    </Link>
                    <Link href="https://linkedin.com" color="inherit" sx={{ mx: 1 }}>
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://twitter.com" color="inherit" sx={{ mx: 1 }}>
                        <TwitterIcon />
                    </Link>
                </Box>
            </div>
            </Box> 
        </footer>
    );
};
export default Footer;