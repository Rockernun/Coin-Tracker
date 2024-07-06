import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { darkTheme } from "./theme";
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

