import React from 'react';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, Container, Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import Layout from './components/Layout';
import AppRoutes from './AppRoutes';

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
   
      <Layout >
            <Routes>
              {AppRoutes.map((route, index) => {
                const { element, ...rest } = route;
                return <Route key={index} {...rest} element={element} />;
              })}
            </Routes>
  
      </Layout>

  );
}

export default App;