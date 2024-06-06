import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://34.229.97.146/',
});

export async function login(data) {
    try {
      const response = await apiClient.post('/login',data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

export async function register(data) {
    try {
      const response = await apiClient.post('/register',data);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }