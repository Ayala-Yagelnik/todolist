import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './AppRoutes';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <div className="App">
      <CacheProvider value={cacheRtl}>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
        </CacheProvider>
    </div>
  );
}

export default App;

// import React from 'react';
// import { Route, Routes, Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
// import { CacheProvider } from '@emotion/react';
// import createCache from '@emotion/cache';
// import { prefixer } from 'stylis';
// import rtlPlugin from 'stylis-plugin-rtl';
// import AppRoutes from './AppRoutes';


// const cacheRtl = createCache({
//   key: 'muirtl',
//   stylisPlugins: [prefixer, rtlPlugin],
// });

// function App() {
//   return (

// <CacheProvider value={cacheRtl}>
//         <AppBar position="static">
//           <Toolbar>
//             <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//               ToDo App
//             </Typography>
//             <Button color="inherit" component={Link} to="/">Home</Button>
//             <Button color="inherit" component={Link} to="/login">Login</Button>
//             <Button color="inherit" component={Link} to="/register">Register</Button>
//             <Button color="inherit" component={Link} to="/toDoList">View Todos</Button>
//           </Toolbar>
//         </AppBar>
//         <Container>
//           <Box sx={{ my: 4 }}>
//             <Routes>
//               {AppRoutes.map((route, index) => {
//                 const { element, ...rest } = route;
//                 return <Route key={index} {...rest} element={element} />;
//               })}
//             </Routes>
//           </Box>
//         </Container>
//     </CacheProvider>

//   );
// }

// export default App;