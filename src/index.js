import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'components/GlobalStyle';
import publications from './publications.json';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';
// import { Example1 } from './components/Example1';
import { Reader } from './components/Reader/Reader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Example1 /> */}
      <Reader items={publications} />
    </ThemeProvider>
  </React.StrictMode>
);
