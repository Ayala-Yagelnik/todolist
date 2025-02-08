import React from "react";
import AppHeader from "./AppHeader";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <>
      <AppHeader />
      <Container maxWidth="lg">
        <Box component="main" sx={{ flexGrow: 1 ,mt:30,mb:30}}>
          {children}
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
