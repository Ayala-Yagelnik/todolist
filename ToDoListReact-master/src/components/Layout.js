import React from "react";
import AppHeader from "./AppHeader";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
ToDoList.com
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

 

  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // A modern blue
      },
      secondary: {
        main: '#dc004e', // A modern pink
      },
      background: {
        default: '#f4f6f8', // Light background for better contrast
      },
    },
  });

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <AppHeader></AppHeader>
      </div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>{children}</main>
        <Box sx={{ bgcolor: "background.paper", p: 1 }} component="footer">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
        </Typography>
        <Copyright />
      </Box>
      </ThemeProvider>
    </>
  );
};

export default Layout;
