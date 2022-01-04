import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ImageResultsContextProvider } from './context/ImageResults';

ReactDOM.render(
  <React.StrictMode>
    <ImageResultsContextProvider>
      <App />
    </ImageResultsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
