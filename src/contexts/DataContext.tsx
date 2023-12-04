import React, { createContext, useState, useEffect, useMemo } from 'react';
import { fetchData } from '../services/BackendService';
import { IData } from '../types/Data';

interface DataContextProps {
  data: IData
  loading: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataContext = createContext<DataContextProps | undefined>(undefined);

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState({} as IData);
  const [loading, setLoading] = useState(true);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const fetchDataa = async () => {
      setLoading(true);
      const result = await fetchData();
      setData(result);
      setLoading(false);
    };

    fetchDataa();
    if (reload) {
      setReload(false);
    }
  }, [reload]);

  const value = useMemo(() => ({
    data,
    loading,
    setReload
  }), [data, loading, reload]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
