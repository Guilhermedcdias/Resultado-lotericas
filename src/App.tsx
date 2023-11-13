import React from 'react';
import { LotteryProvider } from './contexts/LoteriaContext';
import HomePage from './pages/HomePage';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MegaSena from './pages/MegaSena';
import LotoFacil from './pages/LotoFacil';
import Quina from './pages/Quina';
import Navbar from './components/navbar';

function App() {

  return (
    <LotteryProvider>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/megasena" element={<MegaSena />} />
          <Route path="/lotofacil" element={<LotoFacil />} />
          <Route path="/quina" element={<Quina />} />
        </Routes>
      </Router>
    </LotteryProvider>
  );
}

export default App;
