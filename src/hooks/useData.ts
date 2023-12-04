import { useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

const useData = () => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useLottery must be used within a LotteryProvider');
  }

  return context;
};

export default useData;
