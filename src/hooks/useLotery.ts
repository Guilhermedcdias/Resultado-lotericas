import { useContext } from 'react';
import { LotteryContext } from '../contexts/LoteriaContext';

const useLottery = () => {
  const context = useContext(LotteryContext);

  if (!context) {
    throw new Error('useLottery must be used within a LotteryProvider');
  }

  return context;
};

export default useLottery;
