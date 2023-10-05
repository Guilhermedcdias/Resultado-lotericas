import React, { createContext, useState, useEffect, useMemo } from 'react';
import { fetchLotteryData } from '../services/LoteriaService';
import IResultado from '../types/IResultado';

interface LotteryContextProps {
  data: IResultado | null;  // Substitua 'any' pelo tipo de dados que você está recebendo
  loading: boolean;
}

interface LotteryProviderProps {
  children: React.ReactNode;
}

export const LotteryContext = createContext<LotteryContextProps | undefined>(undefined);

export const LotteryProvider: React.FC<LotteryProviderProps> = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await fetchLotteryData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  const value = useMemo(() => ({
    data,
    loading,
  }), [data, loading]);

  return (
    <LotteryContext.Provider value={value}>
      {children}
    </LotteryContext.Provider>
  );
};
