import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3401',
});

export const fetchData = async () => {
  try {
    const response = await api.get('/list');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  }
};

export const DeleteById = async (id: string) => {
  try {
    const response = await api.get(`/remove/${id}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar dados:', error);
  }
}


export const CreateNumber = async (number: string) => {
  try {
    const response = await api.get(`/create/${number}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao criar dados:', error);
  }
}
