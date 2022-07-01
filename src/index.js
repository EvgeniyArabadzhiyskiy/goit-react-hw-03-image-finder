import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { ThemeProvider } from 'styled-components';
import { theme } from 'constants';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
