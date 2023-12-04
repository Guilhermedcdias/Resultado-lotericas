import React from 'react';
import { DataProvider } from './contexts/DataContext';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
