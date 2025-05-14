import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';

import Globalstyles from './styles/golbalStyles';
import { AppProvider } from './hooks/index';
import stripePromise from './config/stripeConfig';
import { ThemeProvider } from 'styled-components';
import { standardTheme } from './styles/themes/standard';
import { Router } from './routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <AppProvider>
        <Elements stripe={stripePromise}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Elements>
        <Globalstyles />
        <ToastContainer autoClose={2000} theme="light" />
      </AppProvider>
    </ThemeProvider>
  </StrictMode>,
);
