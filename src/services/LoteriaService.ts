import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicebus2.caixa.gov.br',
});

export const fetchLotteryData = async () => {
  try {
    const response = await api.get('/portaldeloterias/api/home/ultimos-resultados');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados da loteria:', error);
  }
};
