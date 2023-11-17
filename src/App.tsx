import React from 'react';
import { LotteryProvider } from './contexts/LoteriaContext';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MegaSena from './pages/MegaSena';
import Quina from './pages/Quina';
import TimeMania from './pages/TimeMania';
import { ThemeProvider } from 'styled-components';
import { mega, quina, timemania } from './styles/theme';

function App() {
  return (
    <LotteryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timemania" element={
            <ThemeProvider theme={timemania}>
              <TimeMania />
            </ThemeProvider>
          } />
          <Route path="/megasena" element={
            <ThemeProvider theme={mega}>
              <MegaSena />
            </ThemeProvider>
          } />
          <Route path="/quina" element={
            <ThemeProvider theme={quina}>
              <Quina />
            </ThemeProvider>
          } />
        </Routes>
      </Router>
    </LotteryProvider>
  );
}

export default App;
