import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Container maxWidth="lg" sx={{ mt: 8, mb: 4 , pb: 8}}>
        <Box component="main" sx={{ flexGrow: 1 }}>
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
