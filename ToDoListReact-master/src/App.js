import React from 'react';
import { Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import Layout from './components/Layout';
import AppRoutes from './AppRoutes';


function App() {
  return (
   <Container
   maxWidth={false} 
   sx={{ width: '100%', height: '100%' }}>
      <Layout >
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
  
      </Layout>
</Container>
  );
}

export default App;