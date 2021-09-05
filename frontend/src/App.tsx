import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes/routes';

import './Assets/styles/global.css';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;