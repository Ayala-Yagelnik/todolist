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

// import React from "react";
// import AppHeader from "./AppHeader";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => {
//     return (
//         <>
//             <AppHeader sx={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}/>
//             <Container sx={{
//                 width:'100%',
//                  flexGrow: 1, 
//                  display: 'flex', 
//                  flexDirection: 'column',
//                   justifyContent: 'center',
//                    alignItems: 'center',
//                     bgcolor: 'background.default',
//                     marginTop: '64px', 
//                     marginBottom: '64px'
//                     }} maxWidth="false">
//                 <Box component="main" sx={{flexGrow:1,width:'100%'}}>
//                     {children}
//                 </Box>
//             </Container>
//             <Footer sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }} />
//         </>
//     );
// };

// export default Layout;
