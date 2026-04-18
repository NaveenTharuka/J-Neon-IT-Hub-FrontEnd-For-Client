import axios from 'axios';

// Set up base URL using Vite's environment variable syntax
const API_BASE_URL = 'https://j-neon-it-hub-backend-zxb3.onrender.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
});
