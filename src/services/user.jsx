import {apiClient} from '../api';

export const getUsers = async () => {
  const url = 'users';

  try {
    const response = await apiClient.get(url);
    console.log('res getUsers ', response);
    return response.data;
  } catch (error) {
    console.log('getUsers ERROR', error.response);
  }
};

export const getUser = async id => {
  const url = `users/${id}`;

  try {
    const response = await apiClient.get(url);
    console.log('res getUsers ', response);
    return response.data;
  } catch (error) {
    console.log('getUsers ERROR', error.response);
  }
};
