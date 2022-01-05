import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ImageResultsContextProvider, ModalContextProvider } from './context/ImageResults';

ReactDOM.render(
  <React.StrictMode>
    <ImageResultsContextProvider>
      <ModalContextProvider>
        <App />
      </ModalContextProvider>
    </ImageResultsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
