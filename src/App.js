import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Details } from './Pages';
import './styles/app.module.css';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='stock' element={<Details />} />
    </Routes>
  );
}

export default App;
