import React from "react";
import AppHeader from "./AppHeader";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Footer from "./Footer";

const theme = createTheme({
    palette: {
        primary: {
            main: '#1a237e', // A modern indigo color
        },
        secondary: {
            main: '#ff4081', // A modern pink color
        },
        background: {
            default: '#ffffff', // White background for better contrast
        },
    },
});

const Layout = ({ children }) => {
    return (
        <>
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppHeader />
        <Container sx={{width:'100%', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', bgcolor: 'background.default'}} maxWidth="false">
      
              
     
                <Box component="main" sx={{flexGrow:1,width:'100%'}}>
                    {children}
                </Box>
            </Container>

                <Footer />
            </ThemeProvider>
        </>
    );
};

export default Layout;
