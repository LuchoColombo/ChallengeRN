import axios from 'axios';

export const baseURL = 'https://jsonplaceholder.typicode.com/';

export const apiClient = axios.create({
  baseURL: baseURL,
  timeout: 15000,
});
