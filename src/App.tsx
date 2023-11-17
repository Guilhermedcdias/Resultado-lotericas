import React, { useEffect } from 'react';
import { LotteryProvider } from './contexts/LoteriaContext';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MegaSena from './pages/MegaSena';
import LotoFacil from './pages/LotoFacil';
import Quina from './pages/Quina';
import Navbar from './components/navbar';
import TimeMania from './pages/TimeMania';

function App() {
  const [pathActive, setPathActive] = React.useState<string>('/');
  const links = [
        {
      href: '/timemania',
      color: '#00ff48',
      name: 'TimeMania',
      fsize: '1rem'
    },
    {
      href: '/megasena',
      color: '#209869',
      name: 'Megasena',
      fsize: '1rem'
    },
    // {
    //   href: '/lotofacil',
    //   color: '#260085',
    //   name: 'Lotofacil',
    //   fsize: '1rem'
    // },
    {
      href: '/quina',
      color: '#930089',
      name: 'Quina',
      fsize: '1rem'
    },
  ];
  // função que verifica o path name toda vez que a pagina é carregada ou a rota muda
  useEffect(() => {
    const path = window.location.pathname
    setPathActive(path)
  }, [window.location.pathname])


  return (
    <LotteryProvider>
      <Navbar links={links} pathActive={pathActive} />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/timemania" element={<TimeMania />} />
          <Route path="/megasena" element={<MegaSena />} />
          {/* <Route path="/lotofacil" element={<LotoFacil />} /> */}
          <Route path="/quina" element={<Quina />} />
        </Routes>
      </Router>
    </LotteryProvider>
  );
}

export default App;
