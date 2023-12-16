import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fakeLogin = async (credentials) => {
  try {
    // login request to a fake API
    const response = await axios.post(`${API_BASE_URL}/users`, credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
