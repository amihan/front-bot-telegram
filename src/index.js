import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '@mui/material';


const theme = createTheme({
  // Здесь можно настроить цвета, шрифты и другие свойства темы
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </ThemeProvider>
  </BrowserRouter>
);

