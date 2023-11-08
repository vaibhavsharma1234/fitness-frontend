import axios from 'axios';
import { useUserTokenStore } from '@/store/user'; // Import your Vuex store

const authAxios = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your API base URL
  headers: {
    'content-type': 'application/json', // Use lowercase header names
  },
});

authAxios.interceptors.request.use(
  (config) => {
    // Access the token and bearer token values from your Vuex store
    const store = useUserTokenStore();
    const token = store.token; // Replace with the actual token state name
    const bearerToken = store.bearerToken; // Replace with the actual bearer token state name

    if (bearerToken) {
      config.headers['authorization'] = `Bearer ${bearerToken}`; // Use lowercase header names
    }

    if (token) {
      config.headers['x-auth-token'] = bearerToken; // Use lowercase header names
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default authAxios;
