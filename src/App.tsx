import React from 'react';
import { LotteryProvider } from './contexts/LoteriaContext';
import HomePage from './pages/HomePage';

function App() {
  
  return (
    <LotteryProvider>
      <HomePage />
    </LotteryProvider>
  );
}

export default App;
